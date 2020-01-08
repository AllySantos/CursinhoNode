const express = require ('express');
const app = express();
const handlebars = require('express-handlebars');

const router = require('./routes');
const bodyparser = require('body-parser')
//Configurações do Projeto
  
    //Template Engine handlebars
    app.engine('handlebars', handlebars({
        defaultLayout: 'main'
    }));

    app.set('view engine', 'handlebars')


    //BodyParser
    app.use(bodyparser.urlencoded({extended: false}))
    app.use(bodyparser.json())

    //Routes
    app.use(router)

    app.listen(3030, function(){
    //Função de callback
    console.log("Deu bommm");
});  