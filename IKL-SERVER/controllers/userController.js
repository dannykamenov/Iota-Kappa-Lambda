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

    console.log(session);

    await User.findByIdAndUpdate(customerId, {
        sessionId: session.id,
    });

    res.status(200).json({ id: session.id });

}

module.exports = {
    createUser,
    getUser,
    createCheckoutSession
};