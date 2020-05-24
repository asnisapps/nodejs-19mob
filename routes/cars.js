const express = require('express');
const verifyToken = require('../middlewares/verifyToken');

// Controller
const Cars = require('../controller/Cars');
const carsController = new Cars();

// Instancia do router
const router = express.Router();

router.get('/:id', verifyToken, carsController.get);
router.post('/', verifyToken, carsController.create);
router.delete('/:id', verifyToken, carsController.delete);

module.exports = router;