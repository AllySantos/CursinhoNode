const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const session = require('express-session')
const flash = require('connect-flash')

const app = express()

//Configs

    //Session
    app.use(session({
        secret: 'shhh',
        resave:true,
        saveUninitialized: false
    }))

    app.use(flash())

    //Flash

    app.use((req, res, next) => {
        res.locals.success_msg = req.flash("success_msg")
        res.locals.error_msg = req.flash("error_msg")
        next()
    })

    //Mongoose
        mongoose.connect('mongodb://localhost:27017/bancoBlog', {useNewUrlParser:true, useUnifiedTopology:true}).then(() =>{
            console.log("Conectado com o banco")
        }).catch((erro) =>{
            console.log("Deu ruim " + eroo)
        })

    

    //Handlebars
    app.engine('handlebars', handlebars({
        defaultLayout: 'main'
    }));
    app.set('view engine', 'handlebars')

    //BodyParser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())

    //Public
        const path = require('path')
        app.use(express.static(path.join(__dirname, "public")))

//Rotas
app.use('/admin', require('./routes/admin'))
app.use(express.json());

//Outros
    const porta = 3001
    app.listen(porta, () => console.log("Deuu"))




