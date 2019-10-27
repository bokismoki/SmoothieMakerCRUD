const router = require('express').Router();

const deleteSmoothieController = require('../controllers/deleteSmoothie');

router.delete('/', deleteSmoothieController);

module.exports = router;