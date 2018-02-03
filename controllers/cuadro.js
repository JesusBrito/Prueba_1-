'use strict'

var Cuadro= require('../models/cuadros');

function guardarCuadro(req, res) {
	var cuadro = new Cuadro();
	var params = req.body; 

	
}

function verCuadros(req,res) {
	Cuadros.find({}).sort({'_id':-1}).exec((err, cuadros) => {
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