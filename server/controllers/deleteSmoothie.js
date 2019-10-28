const Smoothie = require('../models/Smoothie');

module.exports = async (req, res) => {
    const id = req.params.id;
    const deletedSmoothie = await Smoothie.findByIdAndDelete(id);
    res.send(deletedSmoothie);
}