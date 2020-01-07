

//Conexao com banco --> dps eu tiro daqui
const Sequelize = require('sequelize');
const sequelize = new Sequelize('bdsistemaCadastro', 'root', 'roselia', {
    host: 'localhost',
    dialect: 'mysql'
})
/*
sequelize.authenticate().then(function(){
    console.log('Deu')
}).catch(function (erro){
    console.log('Nao deu pq ' + erro)
})*/

const Postagens = sequelize.define('tbPostagens', {

    titulo: {
        type: Sequelize.STRING,
        required: true
    },

    conteudo: {
        type: Sequelize.STRING,
        required: true
    }
})

//Postagens.sync({force: true})