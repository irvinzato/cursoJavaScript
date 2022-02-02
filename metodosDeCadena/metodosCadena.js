/*METODOS DE CADENAS
concat() - si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false

BUSCAR CADENAS Y DEVOLVER UN VALOR
startsWith() - si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false
endsWith() - si una cadena termina con los caracteres de otra cadena, devuelve true, sino devuelve fase
includes() - si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino devuelve false
indexOf() - devuelve el indice del primer caracter de la cadena, si no existe devuelve -1
lastIndexOf() - devuelve el utlimo indice del primer caracter de la cadena, si no existe devuelve -1

MODIFICAR Y RELLENAR
padStart() [propuesta de Estandar] - Rellenar cadena al pruncipio con los caracteres deseados
padEnd() [propuesta de ECMA] - Rellenar cadena al final con los caracteres deseados
repeat() - Devuelve la misma cadena pero repetida la cantidad

split(" ") - Divide la cadena como le pidamos y lo transforma en un array
substring(0,4) - Nos retorna un pedazo de la cadena que seleccionamos, donde quieres que arranque y termine
toLowerCase() - Convierte una cadena a minusculas
toUpperCase() - Convierte una cadena a mayusculas
toString() - Devuelve una cadena que representa al objeto especificado
trim() - elimina los espacios en blanco al principio y al final de una cadena
trimEnd() - elimina los espacios en blanco al final de una cadena
trimStart() - elimina los espcios en blanco al comienzo de una cadena
valueOf() - retorna el valor primitivo de un objeto String

*/

let cadena1 = "cadena de prueba 1"; //lo que en realidad sucede es que hace un objeto String
let cadena2 = "cadena de prueba 2";

resultado = cadena1.split(" ");
//resultado = cadena1.trim();

document.write(resultado + "<br>");
//document.write(resultado.length)

/*METODOS DE ARRAYS
- Transformadores, transforman el array, lo cambian
pop() - elimina el ultimo elemento de un array y lo devuelve, opuesto a push()
shift() - elimina el primer elemento de un array y lo devuelve, opuesto a unshift()
push("lo que quieras agregar") - agrega un elemento al array al final de la lista
reverse() - invierte el orden de los elementos de un array
unshift() - agrega uno o mas elementos al inicio del array y devuelve la nueva longitus del array
sort() - ordena los elementos de un arreglo localmente y devuelve el arreglo ordenado
splice(donde arranca,cuantos elementos elimina, los que puede agregar) - cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos, puede agregar o eliminar

-Accesores
join() - une todos los elementos de una matriz(u objeto similar) en una cadena y la devulve, ahora todo es un String
slice(0,2) - devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin(fin no incluido), el dos no esta incluido
Metodos ya vistos en cadenas: toString(), indexOf(), lastIndex(), includes()

-De repeticion
filter() - crea un nuevo array con todos los elementos que cumplan la condicion, recibe como parametro una funcion
forEach() - ejecuta la funcion indicada una ves por cada elemento del array
Son practicamente lo mismo pero filter tiene una cualidad mas que es muy buena que es crear un nuevo array pero solo con los elementos que cumplan la condicion
*/ 

let perros = ["Almendra", "Jimy", "Trixy", "Spunky", "Rocky"];

document.write("Arreglo inicializado: <b>" + perros + "</b>" + "<br>");

let resultadoPerros = perros.pop();

document.write("Accion realizada <b style='color: red'>" + resultadoPerros + "</b><br>");
document.write("Asi quedo el arreglo: <b>" + perros + "</b>");

//EJEMPLO CON METODOS ACCESORES

let participantes = ["Paulina", "Diego", "Benito", "Luis"];

document.write("<br> <br> Arrego con metodos accesores <br>");
document.write("<br> Arreglo inicializado: <b>" + participantes + "</b>" + "<br>");

let resultadoParticipantes = participantes.join("<br>participante: ");

document.write("participante: " + resultadoParticipantes);

//EJEMPLO CON METODOS DE REPETICION
let ganadores = ["Monica", "Angeles", "Jade", "Yosi"]

document.write("<br> <br> Arrego con metodos de repeticion <br>");
ganadores.filter(ganador => document.write(ganador + "<br>")); //el parametro que le pasamos a la funcion va a ser igual a cada elemento del array

//Lo magnifico del filter
let resultadoGanador = ganadores.filter(ganador2 => ganador2.length > 5) 
document.write(resultadoGanador);