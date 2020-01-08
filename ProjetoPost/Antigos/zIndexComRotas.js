const express = require('express');

const app = express();


app.get("/teste/:nome", function(req, res){

    res.send ("Seu nome eh: " + req.params.nome);
});


app.get("/inicio", function(req, res){

    res.sendFile(__dirname+"/html/index.html")

});



app.listen(3001, function(){
    //Função de callback
    console.log("Deu bommm");


});           //última linha do arquivo