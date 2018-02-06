# Prueba uno y dos de backend

Se generaron las ruta con el método POST para el envío de los datos y ademas se generaron las rutas para la visualización de estos mediante la utilización del método GET

**Se realizó el deployd a heroku al cual se puede acceder con las siguientes rutas:**



##Ruta para la consulta de las lineas:

(GET) https://retonodejs.herokuapp.com/linea
![Ejemplo](/images/linea-1.png)

##Ruta para la consulta de los cuadros:

(GET) https://retonodejs.herokuapp.com/cuadro
![Ejemplo](/images/cuadro-1.png)

**Para realizar una nueva inseción a la BD se utilizarán las siguientes rutas:**

##Ruta para insertar nueva linea:

(POST) https://retonodejs.herokuapp.com/linea
![Ejemplo](/images/linea-2.png)
Parámetros (key-value) del body:

Key | Value
------------ | -------------
x|"Punto inicial de la línea"
x|"Longitud de la linea"

##Ruta para la consulta de los cuadros:

(POST) https://retonodejs.herokuapp.com/cuadro
![Ejemplo](/images/cuadro-2.png)

Parámetros del body:

Key | Value
------------ | -------------
x|"Punto X"
x|"Punto Y"
z|"Longitud de los lados"
