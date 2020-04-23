const express = require('express');

// Rotas
const users = require('./users');

// Instancia do router
const router = express.Router();

// Rotas base
router.use('/users', users);

module.exports =  router;

