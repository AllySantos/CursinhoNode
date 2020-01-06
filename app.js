const funcoes = require("./functions");

const http = require("http");

http.createServer(function (req, res){

    res.end(funcoes.soma(2,5) + ' FOIIII');
}).listen(3001);

console.log('Td saindo como planejado');