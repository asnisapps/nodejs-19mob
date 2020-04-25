const express = require('express');

// Controller
const Users = require('../controller/Users');
const usersController = new Users();

// Instancia do router
const router = express.Router();

router.get('/:id', usersController.get);

module.exports = router;