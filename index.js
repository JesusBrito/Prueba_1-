'use strict'
var mongoose= require('mongoose');
var app = require('./app');
var port= process.env.PORT|| 3072;
var bd = process.env.MONGODB_URI || 'mongodb://localhost:27017/lineas';

mongoose.connect(bd, { useMongoClient: true}, (err,res)=>{
	if (err) {
		throw err;
	}else{
		console.log('La conexión a la bd esta funcionando bien');
		app.listen(port, ()=>{
			console.log('El servidor está escuchando en: http://localhost:'+port);
		});
	}
});
