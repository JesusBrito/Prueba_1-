'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//RUTAS
var punto_routes= require('./routes/linea');

//RUTAS BASE
app.use('/',punto_routes);
module.exports=app;