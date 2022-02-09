/* --- CLASES, CLASSLIST Y METODOS DE CLASSLIST --- SE USAN MUCHO
Definicion y usos
add() - añade una clase para dar propiedades que queramos
remove() - remueve una clase
item() - devuelve la clase del indice especificado, lo devuelve como un valor .item(2) asi se accede al numero de clase que queramos
contains() - verifica si ese elemento posee o no, la clase especificada
replace() - reemplaza una clase por otra ("grande","chico")
toggle() - si no tiene la clase especificada, la agrega, si ya la tiene, la elimina. ahorra el if del contains()
            tambien tiene un parametro opcional para forzar , true o false

--- OBTENCION Y MODIFICACION DE ELEMENTOS ---
textContent - devuelve el texto de cualquier nodo, NO DEVUELVE EL HTML. MUESTRA TODO EL TEXTO QUE ESTA ADENTRO PERO SIN ETIQUETAS !
innerText - TAMPOCO SE USA ! devuelve el texto visible de un node element
outerText - NO SE USA MAS ! devuelve el texto que se encuentra en las etiquetas 

MUY UTILES ESTOS JUNTO CON textContent;
innerHTML - devuelve el contenido HTML de un elemento, DEVUELVE TODO EL CONTENIDO HTML ! probar con alert todos estos
outerHTML - devuelve el codigo HTML completo del elemento, DEVUELVE TODO EL CONTENIDO INCLUYENDO EL DE LAS ETIQUETAS ! EL ELEMENTO COMPLETO 

--- CREACION DE ELEMENTOS ---
createElement() - DEBE SER TODO EN MAYUSCULAS
createTextNode() - CREA UN TEXT NODE
appendChild()
createDocumentFragment() - CON ESTO SE AHORRAN LOS RECURSOS DEL DOM, 

--- OBTENCION Y MODIFICACION DE CHILDS(HIJOS) --- TODAS SON PROPIEDADES
    9:03:00
firstChild; - Obtiene el primer hijo pero este cuenta los espacios
lastChild - Es el ultimo nodo
firstElementChild - Obtiene le primer hijo sin importar los espacios
lastElementChild - Mucho mejor que los de arriba
childNodes - Devuelve todos los nodos hijos en un nodeList[], este devuelve texto, aqui se puede recorrer como si fuera arreglo o con forEach
children - Son los elementos hijos, este solo devuelve los elementos HTML, no cuenta los textos, aqui no se puede recorrer como arreglo, se recorre con un for of, incluso deja in

--- METODOS DE CHILDS(HIJOS) ---
appendChild() - Ya lo vimos
replaceChild() - Remplaza el elemento 
removeChild() - Remueve el que queremos
hasChildNodes() - Para verificar si un elemento tiene hijo/s o no, devuelve true o false

--- PROPIEDADES DE PARENTS(PADRES) ---
parentElement - Selecciona el padre elemento de un elemento, SIEMPRE BUSCA UNA ETIQUETA HTML
parentNode - Elige el padre Nodo, son casi lo mismo

--- PROPIEDADES DE SIBLINGS(HERMANOS) --- 
Los elementos hermanos son los que estan en la misma linea o rango
nextSibling - Da al hermano que le sigue cuenta los textos
previousSibling - Da al hermano anterior cuensta los textos
nextElementSibling - Da al hermano siguiente pero solo contando etiquetas HTML
previousElementSibling - Da al hermano anterior pero solo contanto etiquetas HTML

---NODOS - EXTRAS ---
closest() - selecciona el elemento ascendiente mas cercano que coincida con nuestro selector

*/

/* EJEMPLOS HASTA OBTENCION Y MODIFICACION DE ELEMENTOS */
const titulo = document.querySelector(".titulo");

titulo.classList.add("grande");

let obtencion = titulo.textContent;

document.write(obtencion);

/* EJEMPLOS DE CREACION DE ELEMENTOS */

const contenedor = document.querySelector(".contenedor");

const item = document.createElement("LI");
const textItem = document.createTextNode("Este es un elemento de la lista");

item.appendChild(textItem);
contenedor.appendChild(item);

document.write(item);
document.write(contenedor)

const fragmento = document.createDocumentFragment();

for(i=0; i<20;i++) {
    const item2 = document.createElement("LI");
    item2.innerHTML = "ESTE ES UN ITEM DE LA LISTA USANDO createDocumentFragment()"
    fragmento.appendChild(item2);
}

contenedor.appendChild(fragmento);

/*item.innerHTML = "OTRA FORMA DE AGREGAR AL ITEM, USANDO innerHTML"

document.write(item);
document.write(contenedor)*/

console.log(item);


/*EJEMPLOS DE METODOS DE CHILDS*/

const parrafo = document.createElement("P").innerHTML = "Parrafo creado";
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "H2 creado con innerHTML";

let h2_antiguo = document.querySelector(".h2");

console.log(h2_antiguo.parentElement);
contenedor.replaceChild(h2_nuevo,h2_antiguo);

/*TEMRINA LA TEORIA 9:25:00 EMPIEZAN LOS PROBLEMAS MAS INTERESANTES*/