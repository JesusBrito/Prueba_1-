'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//RUTAS
var punto_routes= require('./routes/linea');
var cuadro_routes= require('./routes/cuadro');

//RUTAS BASE
app.use('/',punto_routes);
app.use('/',cuadro_routes);
module.exports=app;