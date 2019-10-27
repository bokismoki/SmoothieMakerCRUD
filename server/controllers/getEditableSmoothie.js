const Smoothie = require('../models/Smoothie');

module.exports = async (req, res) => {
    const smoothie = await Smoothie.findById(req.query.id);
    res.send(smoothie);
}