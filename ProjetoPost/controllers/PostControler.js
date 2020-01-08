const database = require('../models/Database')

const Post = require('../models/Post')

module.exports = {

    store(req, res){
        Post.create({
            titulo: req.body.tituloPost,
            conteudo: req.body.conteudoPost
        }).then(() => res.redirect('/home')).catch((erro) => res.send('deu ruim '+ erro))
    },

    list(req, res){
        Post.findAll({order: [['id', 'DESC']]}).then((posts) => res.render('home', {posts}))
    },


    delete(req, res){
        Post.destroy({where: {'id' : req.params.id }})
        .then(() => res.redirect('/home'))
        .catch(((erro)=> res.send(erro)))
    },

    update(req, res){

        Post.update(
            {  
                titulo: req.body.tituloPost,
                conteudo: req.body.conteudoPost
            },
            { 
                where: {
                    id: req.params.id 
                 } 
            }
          ).then(() => res.redirect('/home'))
          .catch((erro) => console.log(erro))

    },


    select(req, res){
        Post.findAll( {
            where: {
                'id': req.params.id
            }
        }).then((posts) => res.render('form-edit', {posts}))
       .catch((err) => res.send(err))

    
    }

}