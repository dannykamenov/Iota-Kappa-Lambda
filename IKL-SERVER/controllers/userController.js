const mongoose = require("mongoose");
const User = require("../models/userModel");
const stripe_secret = process.env.STRIPE_SECRET;
const stripe = require("stripe")(stripe_secret);

async function createUser(req, res) {
    const { name, email, role } = req.body;

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
        return res.status(200).json({ message: "User already exists" });
    }

    const newUser = new User({
        name,
        email,
        role,
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
            res.status(200).json(user);
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
        payment_method_types: ["card"],
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
        try {
            const subscription = await stripe.subscriptions.retrieve(session.subscription);
            const user = await User.findOneAndUpdate(userId, {
                subscriptionId: subscription.id,
                subscriptionStatus: subscription.status,
                subscriptionDate: new Date(subscription.current_period_start * 1000),
            });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    } else {
        res.status(400).json({ message: "Subscription failed" });
    }
}

module.exports = {
    createUser,
    getUser,
    createCheckoutSession,
    confirmCheckoutSession
};