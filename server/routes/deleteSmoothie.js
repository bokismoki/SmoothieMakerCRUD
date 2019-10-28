const router = require('express').Router();

const deleteSmoothieController = require('../controllers/deleteSmoothie');

router.delete('/:id', deleteSmoothieController);

module.exports = router;