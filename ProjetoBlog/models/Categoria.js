const mongoose = require('mongoose')

const CategoriaSchema =  new mongoose.Schema({
    nomeCategoria: {
        type: String,
        required: true
    },

    slugCategoria: {
        type:String,
        required: true
    },

    createdAt:{
        type: Date,
        default: Date.now()
    }
})

mongoose.model('Categoria', CategoriaSchema)