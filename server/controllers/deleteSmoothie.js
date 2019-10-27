const Smoothie = require('../models/Smoothie');

module.exports = async (req, res) => {
    const deletedSmoothie = await Smoothie.findByIdAndDelete(req.query.id);
    res.send(deletedSmoothie);
}