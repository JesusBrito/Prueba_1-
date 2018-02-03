'use strict'

var express = require('express');
var CuadroController = require('../controllers/cuadro');
var api= express.Router();

api.post('/cuadro', CuadroController.guardarCuadro);
api.get('/cuadro', CuadroController.verCuadros);

module.exports= api;