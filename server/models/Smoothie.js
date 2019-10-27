const mongoose = require('mongoose');

const smoothieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    ingredients: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('Smoothie', smoothieSchema);