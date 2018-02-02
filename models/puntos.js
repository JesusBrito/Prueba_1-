'use strict'

var mongoose= require('mongoose');

var Schema= mongoose.Schema;

var PuntoSchema=Schema({
	punto_inicial: Number,
	longitud: Number
});

module.exports = mongoose.model('Puntos',PuntoSchema);