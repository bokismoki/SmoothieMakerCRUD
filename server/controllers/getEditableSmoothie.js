const Smoothie = require('../models/Smoothie');

module.exports = async (req, res) => {
    const id = req.params.id;
    const smoothie = await Smoothie.findById(id);
    res.send(smoothie);
}