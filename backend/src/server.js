const express = require("express");
const routes = require("./routes/routes");
const db = require('./config/Server_config');
//--------------------------------------------

const server = express();

server.use(express.json());
server.use(routes);

db.authenticate().then(Db => {
    console.log('Banco de Dados conectado');
    server.listen(3333);

}).catch(err => {
    console.log('O erro foi: ' + err)

});