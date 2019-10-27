const router = require('express').Router();

const addSmoothieController = require('../controllers/addSmoothie');

router.post('/', addSmoothieController);

module.exports = router;