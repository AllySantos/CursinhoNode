const mongoose = require('mongoose');
const moment =  require('moment')
const Categoria = mongoose.model('Categoria')

module.exports= {

    async index(req, res){
        await Categoria.find().sort(({_id: 'desc'})).then((categorias) => {
            res.render('admin/index', {categorias})
         
        }).catch((erro) =>{
            console.log(erro)
        })

    },

   async store(req, res){

        const novaCategoria = await Categoria.create(req.body).then(() => {
            req.flash("success_msg", "Categoria criada com sucesso")
            res.redirect('/admin/categorias')
        }).catch((erro) =>{

            req.flash("error_msg", "Categoria não criada com sucesso, tente de novo")
            res.redirect('/admin/categorias')
        })
 
    },

    async update(req, res){
        const catEditada = await Categoria.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then((categoria) => {
            req.flash("success_msg", "Categoria editada com sucesso")
            res.redirect('/admin/categorias')
        }).catch((erro) =>{

            req.flash("error_msg", "Id não existe")
            res.redirect('/admin/categorias')
        })
    },

    async show(req, res){
        await Categoria.find({_id:req.params.id}).then((categorias) => {
            res.render('admin/form-edit', {categorias})

        }).catch((erro) =>{
            console.log(erro)
        })
       
    }




    
}