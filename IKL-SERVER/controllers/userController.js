const mongoose = require("mongoose");
const User = require("../models/userModel");
const stripe_secret = process.env.STRIPE_SECRET;
const stripe = require("stripe")(stripe_secret);

async function createUser(req, res) {
    const { name, email, role, profilePic } = req.body;

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
        return res.status(200).json({ message: "User already exists" });
    }

    const newUser = new User({
        name,
        email,
        role,
        profilePic,
    });

    try {
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

async function getUser(req, res) {
    const { id } = req.params;

    try {
        const user = await User.findOne({ email: id });
        if (user) {
            if (user.subscriptionDate !== null) {
                const currentDate = new Date();
                const subscriptionDate = new Date(user.subscriptionDate);
                const nextYear = new Date(subscriptionDate.setFullYear(subscriptionDate.getFullYear() + 1));
                if (currentDate >= nextYear) {
                    const updatedUser = await User.findOneAndUpdate({ email: id }, {
                        subscriptionDate: currentDate,
                    });
                    res.status(200).json(updatedUser);
                } else if(currentDate >= nextYear && user.subscriptionStatus === "inactive") {
                    const updatedUser = await User.findOneAndUpdate({ email: id }, {
                        subscriptionDate: null,
                    });
                } else {
                    res.status(200).json(user);
                }
            } else {
                res.status(200).json(user);
            }
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

async function createCheckoutSession(req, res) {
    const { priceId, customerId } = req.body;

    const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card","paypal"],
        line_items: [
            {
                price: priceId,
                quantity: 1,
            },
        ],
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/cancel",
    });

    const user = await User.findByIdAndUpdate(customerId, {
        sessionId: session.id,
    });

    if(user) {
        res.status(200).json({ session });
    } else {
        res.status(404).json({ message: "User not found" });
    }

}

async function confirmCheckoutSession(req, res) {
    const { sessionId, userId } = req.body;
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === "paid") {
        const subId = session.subscription;
        try {
            const subscription = await stripe.subscriptions.retrieve(subId);
            const user = await User.findByIdAndUpdate(userId, {
                subscriptionId: subscription.id,
                subscriptionStatus: subscription.status,
                subscriptionDate: new Date(subscription.current_period_start * 1000),
                customerId: subscription.customer,
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    } else {
        res.status(400).json({ message: "Subscription failed" });
    }
}

async function cancelSubscription(req, res) {
    const { id } = req.params;
    const user = await User.findOne({ subscriptionId: id });
    if(user) {
        const subscription = await stripe.subscriptions.cancel(id);
        if(subscription.status === "canceled") {
            const updatedUser = await User.findOneAndUpdate({ subscriptionId: id }, {
                subscriptionStatus: "inactive",
                sessionId: "",
                subscriptionId: "",
                customerId: "",
            });
            res.status(200).json({ message: "Subscription cancelled" });
        } else {
            res.status(400).json({ message: "Subscription cancellation failed" });
        }
    } else {
        res.status(404).json({ message: "User not found" });
    }
}

async function getAllUsers(req, res) {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

async function addUserAlphaId(req, res) {
    const { email, alphaId, initiationDate } = req.body;
    const user = await User.findOneAndUpdate({ email: email }, {
        alphaId,
        initiationDate,
    });
    if(user) {
        res.status(200).json({ message: "Alpha Id added successfully" });
    } else {
        res.status(404).json({ message: "User not found" });
    }
}

module.exports = {
    createUser,
    getUser,
    createCheckoutSession,
    confirmCheckoutSession,
    cancelSubscription,
    getAllUsers,
    addUserAlphaId
};