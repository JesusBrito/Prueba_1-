'use strict'

var Puntos= require('../models/puntos');

function guardarLinea(req,res){
	var puntos = new Puntos();
	var params= req.body;
	var lineaRestante;
	var lineaDerecha;
	var lineaIzquierda;
	var puntoFinal;
	var valoresPermitidos=[];
	var puntoInicialRespuesta;
	var aleatorio;

	puntos.punto_inicial= params.x;
	puntos.longitud= params.y;
	lineaRestante= .10-puntos.longitud;
	puntoFinal= parseFloat(puntos.punto_inicial)+ parseFloat(puntos.longitud);

	if(puntos.punto_inicial>.10||puntoFinal>.10){
		res.send('La línea está fuera del umbral');
	}else if(lineaRestante<puntos.longitud){
		res.send(lineaRestante+" No cabe otra línea de la misma longitud");
	}else{
		//Línea sobrante a la izquierda
		lineaIzquierda=puntos.punto_inicial;
		//Línea sobrante a la derecha
		lineaDerecha=.10-puntoFinal;

		if(lineaIzquierda>=puntos.longitud && lineaDerecha>=puntos.longitud){
			//Evaluación a la izquierda
			for(var i=0;i<(puntos.punto_inicial*100);i++){
				if(i+(parseFloat(puntos.longitud)*100)<=(puntos.punto_inicial*100)){
					valoresPermitidos.push(i);
				}
			}
			//Evaluación a la derecha 
			for(i=(puntoFinal*100);i<10;i++){
				if(i+(parseFloat(puntos.longitud)*100)<=10){
					valoresPermitidos.push(i);
				}
			}
			aleatorio= Math.round(Math.random()*(valoresPermitidos.length-1));

			if(aleatorio==0){
				puntoInicialRespuesta=0;
			}else{
				puntoInicialRespuesta=(valoresPermitidos[aleatorio]/100);
			}
			res.status(200).send("Punto inicial: "+puntoInicialRespuesta+" Longitud: "+puntos.longitud);
		}else if(lineaIzquierda>puntos.longitud){
			valoresPermitidos=[];
			for(var i=0;i<(puntos.punto_inicial*100);i++){
				if(i+(parseFloat(puntos.longitud)*100)<=(puntos.punto_inicial*100)){
					valoresPermitidos.push(i);
				}
			}
			aleatorio= Math.round(Math.random()*(valoresPermitidos.length-1));
			if(aleatorio==0){
				puntoInicialRespuesta=0;
			}else{
				puntoInicialRespuesta=(valoresPermitidos[aleatorio]/100);
			}
			res.status(200).send("Punto inicial: "+puntoInicialRespuesta+" Longitud: "+puntos.longitud);
		
		}else if (lineaDerecha>puntos.longitud){
			valoresPermitidos=[];

			for(i=(puntoFinal*100);i<10;i++){
				if(i+(parseFloat(puntos.longitud)*100)<=10){
					valoresPermitidos.push(i);
				}
			}
			aleatorio= Math.round(Math.random()*(valoresPermitidos.length-1));
			puntoInicialRespuesta=(valoresPermitidos[aleatorio]/100);
			res.status(200).send(" Punto inicial: "+puntoInicialRespuesta+" Longitud: "+puntos.longitud);
		}else{
			res.send(lineaRestante+" No cabe otra línea de la misma longitud");	
		}
	}
	puntos.save((err, puntosStored)=>{
		if (err){
			console.log('Error al guardar el registro');
		}else {
			if(!puntosStored)
				console.log('El registro no ha sido guardado');
		}
	});
}
function verLineas(req, res){
	// Usamos el método find sobre nuesta entidad Nota y ordenamos los resultados
    Puntos.find({}).sort({'_id':-1}).exec((err, puntos) => {
        if(err) return res.status(500).send({message: 'Error en el servidor'});
            if(puntos){
                return res.status(200).send({puntos});
            }else{
                return res.status(404).send({
                    message: 'No hay registros'
                });
            }
    });
}
module.exports = {
	guardarLinea,
	verLineas	
}