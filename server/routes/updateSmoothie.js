const router = require('express').Router();

const updateSmoothieController = require('../controllers/updateSmoothie');

router.put('/', updateSmoothieController);

module.exports = router;