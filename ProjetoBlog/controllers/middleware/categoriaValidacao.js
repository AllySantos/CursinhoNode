const { check, validationResult } = require('express-validator')



const categoriaValidationRules = () =>{

    return [
        check('nomeCategoria') 
            .isLength({min: 3}).withMessage("A categoria deve ter pelo menos 5 caracteres"),

        check('slugCategoria')
            .isLength({ min: 3 }).withMessage("O slug deve ter pelo menos 5 caracteres")
           
            
    ]
 }

 const validateStore = (req, res, next) => {
    const erros = validationResult(req)
    
    if(erros.isEmpty()){
        next()
    }else{
        res.render('admin/form-categorias', {erros: erros.array()})
    }
 }

 
 const validateUpdate = (req, res, next) => {
    const erros = validationResult(req)
    
    if(erros.isEmpty()){
        next()
    }else{
        res.render('admin/form-edit', {
            erros: erros.array(),  
            categorias : {
                nomeCategoria: req.body.nomeCategoria,
                slugCategoria: req.body.slugCategoria,
                _id: req.params.id
            }
        })
    }
 }

module.exports = {
    categoriaValidationRules,
    validateStore,
    validateUpdate
}

