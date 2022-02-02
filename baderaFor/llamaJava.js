// ARREGLOS
/* let nombre = prompt("DAME TU NOMBRE");
let arreglo = ["Mezcal","Jugos","Cremas"];

document.write("Bienvenido " + nombre + "<br>");

for(array of arreglo){ //of da lo que tiene el arreglo
    document.write(array + "<br>");
}

document.write("Contare el tamaño del arreglo <br>");
for(array in arreglo){ //in da el indice
    document.write(array + "<br>");
} */

/* ARREGLOS ASOCIATIVOS  
let pc = {
    nombre: "IrvingPc",
    procesador: "AMD Ryzhen 5",
    ram: "16GB",
    espacio: "1TB"
};

document.write(pc1[nombre])
*/

/* LABEL 
Con etiquetas podemos terminar cualquier bucle, le damos un nombre de etiqueta a los bucles
y decidimos donde queremos terminar toda esa parte o que hacer
forEtiqueta:
for(let array in array2){
    ...
}
*/

// Shift + Alt + A  ---> PARA COMENTAR BLOQUES

//PROBLEMA DEL BAR
document.write("PROBLEMA DE MAQUINA PARA MAYORES DE EDAD" + "<br>");
let hora = 1;
let paseGratis = true;

function pasar(edad, hora){
    
    if(edad >= 18){
        document.write("Puedes pasar ya que tienes " + edad + " años" + "<br>");
        if(hora > 2 && paseGratis == true){
            document.write("Felicidades tienes entrada Gratis por que eres el primero que paso despues de las 2 !!" + "<br>");
            paseGratis = false;
        }
    }else{
        document.write("REGRESA A CASA, ERES MENOR DE EDAD PELMASO, TIENES " + edad + " AÑOS" + "<br>");
    }
}

for(let i=0; hora < 7; i++){
    hora = hora + 0.2;
    pasar(parseInt(Math.random()*(58-15)+15), hora);
}
