'use strict'
var mongoose= require('mongoose');
var app = require('./app');
var port= process.env.PORT|| 3072;

mongoose.connect('mongodb://localhost:27017/lineas', { useMongoClient: true}, (err,res)=>{
	if (err) {
		throw err;
	}else{
		console.log('La conexión a la bd esta funcionando bien');
		app.listen(port, ()=>{
			console.log('El servidor está escuchando en: http://localhost:'+port);
		});
	}
});
