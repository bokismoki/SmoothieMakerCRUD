const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost:27017/smoothie_maker_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, err => {
    if (err) {
        return console.log('There are some problems with connecting to your database');
    }
    console.log('You are connected to the db');
});