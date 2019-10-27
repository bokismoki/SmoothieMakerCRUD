const Smoothie = require('../models/Smoothie');

module.exports = async (req, res) => {
    const {name, ingredients} = req.body;
    const newSmoothie = new Smoothie({
        name,
        ingredients
    });
    const addedSmoothie = await newSmoothie.save();
    res.send(addedSmoothie);
}