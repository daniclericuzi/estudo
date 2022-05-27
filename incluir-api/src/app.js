/**
 * Module dependencies.
 */

 require('dotenv').config();

 const express = require("express");
 const mongoose = require("mongoose");
 const app = express();
 
 /*
   * Conectar com o MongoDB
 */
 mongoose.connect('mongodb://172.18.0.2/incluir');
 
 let db = mongoose.connection;
 
 /*
   * Tratamento do retorno da conexão
 */

mongoose.connection.on('open', function () {
  console.log('Connected to Database '+'test');
});

mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});
 
 /**
  * Routes
  */
 const users = require('./routes/userRoute');
 const estabelecimentos = require('./routes/estabelecimentoRoute');
 const avaliacoes = require('./routes/avaliacaoRoute');

 
 app.use(express.json());
 
 app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*")
   res.header(
     "Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept"
     )
     next()
   });
 
 app.use('/users', users);
 app.use('/estabelecimentos', estabelecimentos);
 app.use('/avaliacao', avaliacoes);

 module.exports = app;