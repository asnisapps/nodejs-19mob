const express = require('express');

// Rotas
const users = require('./users');
const auth = require('./auth');

// Instancia do router
const router = express.Router();

// Rotas base
router.use('/users', users);
router.use('/users/auth', auth);

module.exports =  router;

