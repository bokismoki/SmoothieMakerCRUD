const router = require('express').Router();

const getEditableSmoothieController = require('../controllers/getEditableSmoothie');

router.get('/', getEditableSmoothieController);

module.exports = router;