const database = require('./Database')


const Post = database.sequelize.define('tbPostagens', {

    titulo: {
        type: database.Sequelize.STRING,
        required: true
    },

    conteudo: {
        type: database.Sequelize.STRING,
        required: true
    }
})


module.exports = Post;