/* --- ¿Que es el DOM? ---
Document Object Model es una interfaz que contiene todos los objetos o elementos

- Nodo - Es cualquier etiquetqa del cuerpo, como un parrafo, el midmo body o incluso las etiquedas de una lista
Una etoqueta crea un nodo pero no todos los nodos son etiquetas

Se puede esquematizar de la siguiente forma, puede ser un arbol
DOM - HTML - HEAD - TITLE
                  - META
           - BODY - SCRIPT
                  - FORM - INPUT

--- TIPOS DE NODO ---
- Document: el nodo document es el nodo raiz, a partir del cual redivan el resto de nodos
- Element: nodos definidos por etiquetas html
- Text: el texto dentro de un nodo element se considera con un nuevo nodo hijo del tipo text
- Attribute: los atributos de las etiquetas defienen nodos, (en Javascript no los veremos como nodos, sino como informacion asociada al nodo de tipo element)
- Comentarios y otros: los comentarios y otros elementos como las declaraciones doctype en cabecera de los documentos HTML generan nodos

--- DOCUMENT document. - METODOS DE SELECCION DE ELEMENTO ---
SE APLICAN A LOS DOCUMENTOS ! .document
- getElementById() - selecciona un elemento por ID
let parrafo = document.getElementById("parrafo")
document.write(parrafo); //segun la etiqueta del HTML nos dice objeto de HTML y otros con el nombre

- getElementByTagName() - selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada
let parrafoEti = document.getElementsByTagName("p")
document.write(parrafoEti); //es una coleccion HTML, devuelve una lista de elementos p, se puede acceder con indices []

- querySelector() - Devuelve el primer elemento que coincida con el grupo especificado de selectores
let parrafoQue = document.querySelector(".parrafoQuery")
document.write(parrafoQue);

- querySelectorAll() - Devuelve todos los elementos que coincidan con el grupo especificado de selectores
Son objetos !

*/

/* --- METODOS PARA DEFINIR, OBTENER Y ELIMINAR ATRIBUTOS ---
SE APLICAN A LOS ELEMENTOS ! element.
setAttribute() - Modifica el valor de un atributo e incluso los puede crear si en HTML no tiene
let seleccionRango = document.querySelector(".inputRange");
seleccionRango.setAttribute("type","color");

getAttribute() - Obtiene el valor de un atributo
let valorAtributo = seleccionRango.getAttribute("type");
document.write(valorAtributo);

removeAttribute() - Revueme el valor de un atributo
 */


/* --- ATRIBUTOS GLOBALES, todos los elementos HTML los contienen ---
class - lista de clases del elemento separadas por espacios
contentEditable - indica si el elemento puede ser modificable por el usuario (bool)
dir - indica si el elemento aun no es, o ya es, relevante, tiene tres valores
id - define un identificador unico
hidden - ocultar elementos
style - contiene declaraciones de estilos CDD para ser aplicadas al elemento
tabindex - indica si el elemento puede obtener un FOCUS de input, hace focus a los elementos
title - contiene un texto con informacion relacionada al elemento al que pertenece
 */

let titulo = document.querySelector(".titulo");

titulo.setAttribute("contentEditable", "true");

/* --- ATRIBUTOS DE INPUTS DESDE JS 8:18:00---
className - muestra la clase del input
value - muestra el valor del input SE USA MUCHO
type - muestra el tipo
accept - para los type file acepten solo ciertos archivos
form - importante que este dentro del form input text y submit o si esta fuera submit deberia tener el form="id del formulario que pertenece" para poder enviar
minlength - minima cantidad de caracteres que debe tener un input, tambien funciona con setAtrtibute("minlength","4")
placeholder - lo que tiene dentro el input
required - permite decir si es un campo REQUERIDO o no
 */

const input = document.querySelector(".input-file");

input.accept = "image/png";

const inputFormText = document.querySelector(".input-form-text1");
const inputFormObligatorio = document.querySelector(".input-form-text2");

inputFormText.minLength = "4";
inputFormObligatorio.required = "required";


/* --- ATRIBUTO STYLE 8:29:00---
usos y ejemplos para trabajar con estilos en JS
propiedades Camel Case - Esto significa usar mayusculas en lugar de "-" ejemplo background-color seria backgroundColor
 */

const tituloh1 = document.querySelector(".tituloh1");

tituloh1.style.color = "#bbb";