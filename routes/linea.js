'use strict'

var express = require('express');
var LineaController= require('../controllers/linea');
var api= express.Router();

api.post('/linea', LineaController.guardarLinea);
api.get('/linea', LineaController.verLineas);

module.exports= api;
