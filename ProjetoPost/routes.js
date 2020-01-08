const express = require('express')
const routes = express.Router()
const PostController = require('./controllers/PostControler')


routes.get("/home", PostController.list)

routes.get("/cad", (req, res) => res.render('formulario'));
routes.get('/att/:id', PostController.select);
routes.get('/deletar/:id',PostController.delete);

routes.post('/atualizaPost/:id', PostController.update);
routes.post('/recebeDados', PostController.store);

module.exports = routes;