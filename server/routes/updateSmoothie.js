const router = require('express').Router();

const updateSmoothieController = require('../controllers/updateSmoothie');

router.put('/:id', updateSmoothieController);

module.exports = router;