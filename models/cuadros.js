'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CuadroSchema= Schema({
	val_horizontal: Number,
	val_vertical: Number,
	longitud: Number
});
module.exports = mongoose.model('Cuadro', CuadroSchema);