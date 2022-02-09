const contenedor = document.querySelector(".flex-container");
const contenedorResultado = document.querySelector(".resultado");

function crearLlave(nombre, modelo, precio){
    nombre = `<h2>Nombre: ${nombre}</h2>`;
    modelo = `<h3>Modelo: ${modelo}</h3>`;
    precio = `<p>Precio:<b>$${precio} Dolares</b></p>`;
    img = `<img src="img/llave.png"> `;
    return [img,nombre,modelo,precio];                  //devuelve un arreglo
}

const changeHidden = (number)=> {           //RECIBE EL NUMERO Y LO PONE EN VALUE
    document.querySelector(".key-data").value = number;
    
    let h2Resultado = document.createElement("H2");
    let h3Resultado = document.createElement("H3");
    h2Resultado = `<h2>${number}</h2>`;
    h3Resultado = `Seleccionaste el siguiente modelo:`;
    contenedorResultado.innerHTML = h3Resultado + " " + h2Resultado;
}

let documentFragment = document.createDocumentFragment();       //creando nuevo fragmento para usarlo en el contenedor

for (var i = 1; i <= 20; i++) {
    let modeloRandom = Math.round(Math.random()*2000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llave = crearLlave(`Llave ${i}`, modeloRandom, precioRandom);
    let div = document.createElement("DIV");
    div.addEventListener("click", ()=>{changeHidden(modeloRandom)});    //AQUI EL USUARIO SELECCIONA CON EL CLICK, COMPRENDER FUNCION FLECHA
    div.classList.add(`flex-item`, `item-${i}`);
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    //contenedor.innerHTML += div;
    documentFragment.appendChild(div);
}
contenedor.appendChild(documentFragment);


/*
const llave = crearLlave("Llave 1","antigua","100")

contenedor.innerHTML = llave[0] + llave[1] + llave[2];
*/