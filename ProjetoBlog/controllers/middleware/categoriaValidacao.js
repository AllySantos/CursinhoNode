const { check, validationResult } = require('express-validator')

const categoriaValidationRules = () =>{

    return [
        check('nomeCategoria') 
            .isLength({min: 3}).withMessage("A categoria deve ter pelo menos 5 caracteres"),

        check('slugCategoria')
            .isLength({ min: 3 }).withMessage("O slug deve ter pelo menos 5 caracteres")
           
            
    ]
 }

 const validate = (req, res, next) => {
    const erros = validationResult(req)
    
    if(erros.isEmpty()){
        next()
    }else{
        res.render('admin/form-categorias', {erros: erros.array()})
    }
 }

module.exports = {
    categoriaValidationRules,
    validate
}

