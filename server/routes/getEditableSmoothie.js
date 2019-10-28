const router = require('express').Router();

const getEditableSmoothieController = require('../controllers/getEditableSmoothie');

router.get('/:id', getEditableSmoothieController);

module.exports = router;