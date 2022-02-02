//ESTUDIAR COMO FUNCIONA LET MATERIAS !!!!
const obtenerInformacion = (materia) =>{
    let materias = {
        programacion: ["Castro", "yin", "dani", "pablo", "irving", "mari"],
        ingles: ["Luisa", "dani", "pablo", "irving", "mari"],
        concurrente: ["Felipe", "yin", "dani", "pablo"],
        artificial: ["Benja", "yin", "dani", "pablo", "irving", "mari"],
        aleman: ["Jenni", "pablo", "irving", "mari"]
    }
    if(materias[materia] !== undefined){
        return [materias[materia],materia];
    } else {
        return false;
    }
}

const mostrarInformacion = (materia) => {
    let informacion = obtenerInformacion(materia);

    if(informacion !== false){
        let profesor = obtenerInformacion(materia)[0][0];
        let alumnos = obtenerInformacion(materia)[0];
        alumnos.shift();
        document.write(`El profesor de <b> ${informacion[1]} </b> es: <b style="color:red"> ${profesor} </b><br>
        Los alumnos son: <b style="color:blue"> ${alumnos} </b><br><br>
        `);
    }
}




mostrarInformacion("ingles");
mostrarInformacion("programacion");
mostrarInformacion("aleman");
mostrarInformacion("artificial");
mostrarInformacion("concurrente");