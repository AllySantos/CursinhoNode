const Sequelize = require('sequelize');

const sequelize = new Sequelize('bdsistemaCadastro', 'root', 'roselia', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize,
    sequelize
}