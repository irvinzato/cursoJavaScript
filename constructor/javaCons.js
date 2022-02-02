//EJEMPLO DE CONSTRUCTOR CON ANIMAL 
//usar ` backticks puede ser muy buena opcion
//El metodo va dentro de una clase, la funcuion va afuera de una clase
/*class animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        //this.nuevaVariable = 2; //se pueden crear variables del constructor aun que no se pasen
        this.info = `Soy ${this.especie}, tengo ${this.edad} años 
        y soy de color ${this.color}`;
    }

    verInfo(){ //Metodo para ver la informacion del constructor
        document.write(this.info + "<br>");
    }
}

//HERENCIA !!!
class perro extends animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    ladrar(){
        document.write("WOOOOOOW" + "<br>");
    }
}

let doberman = new perro("perro", 5, "cafe", "doberman");
let leon = new animal("leon", 3, "amarillo");
let perico = new animal("perico", 2, "verde");

//document.write(doberman.info + "<br>"); //this.info tiene toda la informacion del animal perro
doberman.verInfo();
doberman.ladrar();
leon.verInfo();
perico.verInfo();
*/
//EN ESTA CLASE FALTAN GET Y SET

//PROBLEMA DE COFLA CON INFO DE CELULARES 4:42:00

class celulares{
    constructor(color, peso, tamaño, resCamara, ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resCamara = resCamara;
        this.ram = ram;
        this.prende = false;
    }
    presionarEncendido(){
        if(this.prende == false){
            alert("Se prendio el celular");
            this.prende = true;
        }
        alert("Se apago el celular");
        this.prende = false;
    }
    reiniciar(){
        if(this.prende == true){
            alert("reiniciando el celular");
        }
        alert("el celular esta apagado");
    }
    tomarFoto(){
        if(this.prende == true){
            alert(`tomando fotografia con una resolucion de ${this.resCamara}`);
        }
        alert("no se puede tomar fotogragias por que esta apagado");
    }
    grabarVideo(){
        alert(`grabando video con una resolucion de ${this.resCamara}`);
    }
    mobileInfo(){
        document.write(`El color es ${this.color} <br>
        Pesa ${this.peso} <br>
        Tamaño de ${this.tamaño} <br>
        Resolucion de camara ${this.resCamara} <br>
        Tiene RAM de ${this.ram} <br> <br> <br>`);
    }
}


class celularesAltaGama extends celulares{
    constructor(color, peso, tamaño, resCamara, ram, resCamaraExtra){
        super(color, peso, tamaño, resCamara, ram);
        this.resCamaraExtra = resCamaraExtra;
    }
    fotoCamaraExtra(){
        alert(`Fotografia tomada con camara extra ${this.resCamaraExtra}`)
    }
    reconocimientoFacial(){
        alert(`Haciendo proceso de reconocimiento facial`);
    }
    infoAltaGama(){
        document.write(`El color es ${this.color} <br>
        Pesa ${this.peso} <br>
        Tamaño de ${this.tamaño} <br>
        Resolucion de camara ${this.resCamara} <br>
        Tiene RAM de ${this.ram} <br>
        Camara extra de ${this.resCamaraExtra} <br> <br> <br>`);
    }
}

var celular1 = new celulares("verde", "140grm", "10mcm", "15mpx", "4ram");
var celular2 = new celulares("rojo", "120grm", "15mcm", "8mpx", "2ram");
var celular3 = new celulares("gris", "110grm", "12mcm", "20mpx", "6ram");

var celular4 = new celularesAltaGama("negro", "100grm", "13mcm", "15mpx", "6ram", "Full HD");
var celular5 = new celularesAltaGama("azul", "120grm", "12mcm", "20mpx", "7ram", "HD");



celular1.mobileInfo();
celular2.mobileInfo();
celular3.mobileInfo();

celular4.infoAltaGama();
celular5.infoAltaGama();

//OTRO EJERCICIO EN 5:00:00