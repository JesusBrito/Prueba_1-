'use strict'

var Cuadro= require('../models/cuadros');

var punto_inicial_x = 0;
var punto_final_x = 1;
var punto_inicial_y = 0;
var punto_final_y = 1;
var rangos_utilizados_x;
var rangos_utilizados_y;

var cuadro = new Cuadro();
var cuadroRes= new Cuadro();
var horizontal;
var vertical;
var longitud;
var params;
var puntoFinalH=horizontal+longitud;
var puntoFinalV=vertical+longitud;
var puntoFinalHA;
var puntoFinalVA;
var aleatorioH;
var aleatorioV;
var pasa_x;
var pasa_y;

function guardarCuadro(req, res) {
	params = req.body;
	horizontal = parseFloat(params.x);
	vertical = parseFloat(params.y);
	longitud = parseFloat(params.z);
	rangos_utilizados_x = new Array();
	rangos_utilizados_y = new Array();

	cuadro.val_horizontal=params.x;
	cuadro.val_vertical=params.y;
	cuadro.longitud=longitud;
	cuadro.save((err, cuadrosStored)=>{
		if (err){
			console.log('Error al guardar el registro');
		}else if(!cuadrosStored){
				console.log('El registro no ha sido guardado');
		}else{
			console.log('El registro ha sido guardado');
		}
	});

	try {
		console.log('Antes del IF');
	  	if(validar_puntos(horizontal, vertical, longitud, true)){
		  	console.log('despúes del IF');
		    for(var i=0;i<100000;i++){
		      	aleatorioH= Math.random();
				aleatorioV= Math.random();
				aleatorioH=aleatorioH.toFixed(2);
				aleatorioV=aleatorioV.toFixed(2);
				console.log(i+" --- "+aleatorioH+"--"+aleatorioV);

		        try{
		        	if(aleatorioH==horizontal && aleatorioV==vertical){
		            	continue;
		          	}else if(validar_puntos(aleatorioH, aleatorioV, longitud,false)){
		          		cuadroRes.val_horizontal=aleatorioH;
						cuadroRes.val_vertical=aleatorioV;
						cuadroRes.longitud=longitud;
						return res.status(200).send({cuadro:cuadroRes});		
		          		break;
		          	}
		        }catch(err){
		       		console.log(err);
		       		continue;
		        }
		    }
		    return res.status(404).send('No puede haber un cuadro');
		}
	}catch(err){
	  	console.log(err); 
	}
}

function validar_puntos(x,y,z,validar){
	pasa_x = true;
    pasa_y = true;
    puntoFinalHA=parseFloat(x)+parseFloat(z);
    puntoFinalVA=parseFloat(y)+parseFloat(z);
	if( x >= punto_inicial_x && x <= punto_final_x  &&  y >= punto_inicial_y && y<= punto_final_y){
		if(puntoFinalHA <= punto_final_x && puntoFinalVA <= punto_final_y){
			aleatorioH=parseFloat(x);//x1
			puntoFinalHA=parseFloat(x)+parseFloat(z);//x2
			aleatorioV=parseFloat(y);
			puntoFinalVA=parseFloat(y)+parseFloat(z);

			for (var rango_utilizado_x of rangos_utilizados_x) {
				if(aleatorioH>rango_utilizado_x[0] && aleatorioH< rango_utilizado_x[1] || puntoFinalHA> rango_utilizado_x[0] && puntoFinalHA <rango_utilizado_x[1]){
					pasa_x=false;
					break;
				}else{
					pasa_x=true;
				}
			}

			for (var rango_utilizado_y of rangos_utilizados_y) {
				if(aleatorioV>rango_utilizado_y[0] && aleatorioV< rango_utilizado_y[1] || puntoFinalVA> rango_utilizado_y[0] && puntoFinalVA <rango_utilizado_y[1]){
					pasa_x=false;
					break;
				}else{
					pasa_y=true;
				}
			}

			if(pasa_x && pasa_y){
				if(validar){
					console.log('Se guardan');
					rangos_utilizados_x.push([aleatorioH,puntoFinalHA]); 
					rangos_utilizados_y.push([aleatorioV,puntoFinalVA]);
					console.log("X: "+rangos_utilizados_x);
					console.log("Y: "+rangos_utilizados_y);
				}
				return true;
			}else{
				console.log('Los cuadros se traslapan');
			}
		}else{
			console.log('Las medidas se salen del umbral: '+ puntoFinalHA +" - "+puntoFinalVA);
		}
	}else{
		console.log('Puntos no validos');
	}
}

function verCuadros(req,res) {
	Cuadro.find({}).sort({'_id':-1}).exec((err, cuadros) => {
        if(err) return res.status(500).send({message: 'Error en el servidor'});
            if(cuadros){
                return res.status(200).send({cuadros});
            }else{
                return res.status(404).send({
                    message: 'No hay registros'
                });
            }
    });
}
module.exports = {
	guardarCuadro,
	verCuadros
}
