const express = require('express');

// Rotas
const users = require('./users');
const cars = require('./cars');
const auth = require('./auth');

// Instancia do router
const router = express.Router();

// Rotas base
router.use('/users', users);
router.use('/auth', auth);

router.use('/cars', cars);

router.use((req, res, next) => {
    res.status(404).send({ message: 'PÁGINA NÃO ENCONTRADA!!!' });
  });

module.exports =  router;

