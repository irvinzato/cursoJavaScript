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

/* --- ATRIBUTOS DE INPUTS DESDE JS---
className
value
type
accept
form
winlength
placeholder
required
 */

/* --- ATRIBUTO STYLE ---
usos y ejemplos
propiedades Camel Case
 */