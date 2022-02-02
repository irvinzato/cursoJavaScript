//Manera mas tradicional de hacer funciones
function saludar () {
    respuesta = prompt("Hola, ¿Como va tu dia?");
    if(respuesta == "bien"){
        alert("Me da gusto")
    } else if(respuesta == "mal") {
        alert("Mas triste")
    } else
        alert("No entendi que dijiste")
}

function saludar2() {
    alert("Que hay de nuevo viejo")
    return "Se ejecuto correctamente";
}

let saludo = saludar2(); //PARA QUE LA FUNCION SE CONVIERTA EN ALGO QUE ESTA RETORNANDO, return termina la funcion como el break

saludar()
document.write(saludo + "<br>")

//FUNCIONES CON VARIABLES

function suma(num1, num2){
    let res = num1 + num2;
    document.write(res);
    document.write("<br>");
}

suma(12, 32)

//FUNCIONES FLECHA

const saludaMano = (nombre)=>{
    let frase = `Hola ${nombre} que me cuentas`
    document.write(frase)
}

saludaMano("Irving")

//RESOLVER PROBLEMAS DEL MINUTO 3:35:00