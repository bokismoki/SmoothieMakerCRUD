const Smoothie = require('../models/Smoothie');

module.exports = async (req, res) => {
    const updateSmoothie = req.body;
    const id = req.params.id;
    const smoothies = await Smoothie.findByIdAndUpdate(id, updateSmoothie);
    res.send(smoothies);
}