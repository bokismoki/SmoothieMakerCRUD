const Smoothie = require('../models/Smoothie');

module.exports = async (req, res) => {
    const smoothies = await Smoothie.find({});
    res.send(smoothies);
}