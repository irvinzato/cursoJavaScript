/* --- FUNCIONES DE REGISTRO
assert()
clear()
error()
info()
log() - suele ser mas utilizado
table() - debe tener dentro un array u objeto
warn() - tira una advertencia
dir() - vemos los datos de manera distinta

   --- FUNCIONES DE CONTEO ---
count() - nos dice todas las veces que se ocupo algo, por ejemplo una funcion
countReset() - resetea el conteo

   --- FUNCIONES DE AGRUPACION ---
group() - crea grupos en consola
groupEnd()
groupCollapsed() - lo muestra cerrado, es la unica diferencia con group()

   --- FUNCIONES DE TEMPORIZACION ---
time() - para conocer el tiempo de ejecucion de las cosas
timeLog()
timeEnd()
   
   --- MODIFICAR ESTILO DE TEXTO EN CONSOLA ---
Se puede usar con estilos la consola pero con ciertas limitaciones, no seja usar las medidas del width o display block etc.
ocupa el signo de % y los estilos deseados
console.log("%cRANCIO","color:white;background:black;padding:20px;"):
*/

let materias = {
    fisica: [90, 6, 4],
    matematicas: [70, 8, 3],
    español: [90, 8, 4],
    quimica: [90, 6, 4],
    etica: [90, 10, 2],
    biologia: [90, 7, 4],
    geografia: [60, 8, 3]
}

//document.write(Object.values(materias));


function asistencia() {
    document.write("<br><br> METODO PARA REVISAR ASISTENCIAS <br><br>");
    for(materia in materias){
        let assistance = materias[materia][0];
        let avarege = materias[materia][1];
        let works = materias[materia][2];
        console.log(materia);


        if(assistance >= 90 && avarege >= 6){
            document.write(`Felicidades, tu asistencia es de - <b style="color:green"> ${assistance} </b> <br>
                            Tu promedio es de - <b style="color:green"> ${avarege} </b> <br><br>`);  
            console.log("%cAPROVASTE, ni tu te la crees","color:green;padding:20px;")
        } else {
            document.write(`Lo sentimos pero vas a reprobar tu asistencia es de - <b style="color:red"> ${assistance} </b><br>
                            Tu promedio es de - <b style="color:red"> ${avarege} </b> <br><br>`);     
            console.log("%cREPROBASTE, re malo ","color:red;padding:20px;")
        }
    }
}

function imprimirObjeto() {
    document.write("PRUEBAS CON RECORRIDO DE OBJETO <br><br>");
    for(materia in materias){
        document.write(materia + " ");
        document.write(materias[materia] + " ");
    }
}

imprimirObjeto()
asistencia()



/*Metodos de objetos
Object.values(), da los valores del objeto despues del :
Object.keys(), da los valores del objetos antes del :
Object.entries(), da todos los valores del objeto

Continuar con problema 2 - 7:31:00
*/ 