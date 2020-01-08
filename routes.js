const express = require('express')
const routes = express.Router()
const PostController = require('./controllers/PostControler')


routes.get("/home", PostController.list)
routes.get("/cad", (req, res) => res.render('formulario'));
routes.get('/att/:id', (req, res) => res.render('form-edit', {'id': req.params.id}))

routes.put('/atualizaPost', PostController.update);
routes.post('/recebeDados', PostController.store);

module.exports = routes;