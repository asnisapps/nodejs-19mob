const express = require('express');

// Controller
const Auth = require('../controller/Auth');
const authController = new Auth();

// Instancia do router
const router = express.Router();

router.post('/', authController.validate);

module.exports = router;