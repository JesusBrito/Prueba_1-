Se generaron las ruta con el método POST para el envío de los datos y ademas se generaron las rutas para la visualización de estos mediante la utilización del método GET

Se realizó el deployd a heroku al cual se puede acceder con las siguientes rutas:
Ruta para la consulta de las lineas:
(GET) https://retonodejs.herokuapp.com/linea
Ruta para la consulta de los cuadros:
(GET) https://retonodejs.herokuapp.com/cuadro

Para realizar una nueva inseción a la BD se utilizarán las siguientes rutas:
Ruta para insertar nueva linea:
(POST) https://retonodejs.herokuapp.com/linea
	Parámetros (key-value) de el body:
	x:"Punto inicial de la línea"
	y:"Longitud de la linea"
Ruta para la consulta de los cuadros:
(POST) https://retonodejs.herokuapp.com/cuadro
	Parámetros (key-value) de el body:
	x:"Punto X"
	y:"Punto Y"
	y:"Longitud de los lados"