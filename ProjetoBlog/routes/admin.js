require('../models/Categoria')
const express = require('express')
const routes = express.Router()
const CategoriaController = require('../controllers/CategoriaController')
const validation = require('../controllers/middleware/categoriaValidacao')


//Lista as categorias
routes.get("/categorias", CategoriaController.index)


//Form de categorias
routes.get('/categorias/novaCategoria', (req, res) =>{
    res.render('admin/form-categorias')
})

//Validação do form de categorias
routes.post("/categorias/cadastrarCategoria", validation.categoriaValidationRules(), validation.validate,  CategoriaController.store)

//Form de edição de categorias
routes.get("/categorias/editarCategorias/:id", CategoriaController.show)

module.exports = routes