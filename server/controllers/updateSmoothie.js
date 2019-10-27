const Smoothie = require('../models/Smoothie');

module.exports = async (req, res) => {
    const updateSmoothie = req.body;
    const smoothies = await Smoothie.findByIdAndUpdate(req.query.id, updateSmoothie);
    res.send(smoothies);
}