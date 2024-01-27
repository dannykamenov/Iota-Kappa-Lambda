const mongoose = require("mongoose");
const Photo = require("../models/photoModel");


async function createPhoto(req, res) {
    try {
        const newPhoto = await Photo.create(req.body);
        res.status(201).json({
        status: "success",
        data: {
            photo: newPhoto,
        },
        });
    } catch (err) {
        res.status(400).json({
        status: "fail",
        message: err.message,
        });
    }
}

async function getAllPhotos(req, res) {
    try {
        const photos = await Photo.find();
        res.status(200).json({
        status: "success",
        results: photos.length,
        data: {
            photos,
        },
        });
    } catch (err) {
        res.status(400).json({
        status: "fail",
        message: err.message,
        });
    }
}

async function deletePhoto(req, res) {
    try {
        await Photo.findByIdAndDelete(req.params.id);
        res.status(204).json({
        status: "success",
        data: null,
        });
    } catch (err) {
        res.status(400).json({
        status: "fail",
        message: err.message,
        });
    }
}

module.exports = {
    createPhoto,
    getAllPhotos,
    deletePhoto,
}