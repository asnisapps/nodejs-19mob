const express = require('express');
const verifyToken = require('../middlewares/verifyToken');

// Controller
const Users = require('../controller/Users');
const usersController = new Users();

// Instancia do router
const router = express.Router();

router.get('/:id', usersController.get);
router.post('/', usersController.create);
router.delete('/:id', verifyToken, usersController.delete);

module.exports = router;