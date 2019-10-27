// Imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// DB connection
require('./db/mongoose');

// Server app init
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routes
const homeRouter = require('./routes/home');
app.use('/', homeRouter);

const addSmoothieRouter = require('./routes/addSmoothie');
app.use('/addSmoothie', addSmoothieRouter);

const deleteSmoothieRouter = require('./routes/deleteSmoothie');
app.use('/deleteSmoothie', deleteSmoothieRouter);

const getEditableSmoothieRouter = require('./routes/getEditableSmoothie');
app.use('/editSmoothie', getEditableSmoothieRouter);

const updateSmoothieRouter = require('./routes/updateSmoothie');
app.use('/updateSmoothie', updateSmoothieRouter);

// Server start
app.listen(3000, () => {
    console.log('Server is running');
})