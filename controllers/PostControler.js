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

    update(req, res){
        Post.find({where: {'id' : req.params.id}}).on('sucess', function(post){
            if(post){
                post.update( {
                    titulo: req.body.tituloPost,
                    conteudo: req.body.conteudoPost
                })
            }
        })
    }

}