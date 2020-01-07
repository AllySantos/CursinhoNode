const express = require('express')
const routes = express.Router()



routes.get("/cad", function(req, res){
    res.render('formulario')
});

routes.post('/recebeDados', function(req, res){
    res.send(req.body.tituloPost)
});

module.exports = routes;