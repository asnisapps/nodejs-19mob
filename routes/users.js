const express = require('express');

// Instancia do router
const router = express.Router();

router.get('/:id', function(req,res) {
    res.send(`Eu recebi o parametro ${req.params.id}`)
})

module.exports = router;