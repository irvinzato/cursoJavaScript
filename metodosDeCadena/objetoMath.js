/*OBJETO MATH 6:08:00
- METODOS
- sqrt() - Devuelve la raiz cuadrada positiva de un numero
- cbrt() - Devuelve la raiz cubica de un numero
- max() - Devuelve el mayor de cero o mas numeros
- min()- Devuelve el mas pequeño de cero o mas numeros
- random() - Devuelve un numero pseudo aleatorio entre 0 y 1
- round() - Devuelve el valor de un numero redondeado al numero entero mas cercano
- fround() - Devuelve la representacion flotante de precision simple mas cercana de un umero
- floor() - Devuelve el mayor entero menor que o igual a un numero
- trunc() - Devuelve la parte entera del numero x, la eliminacion de los digitos fracciopnarios, elimina los decimales

- PROPIEDADES
- PI - Radio de la circunferencia de un circulo respecto a su diametro, aproximadamente 3.1416
- SQRT1_2 - Raiz cuadrada de 1/2; Equivalentemente, 1 sobre la raiz cuadrada de 2, aproximadamente 0.707
- SQRT2 - Raiz cuadrada de 2, aproximadamente 1.414

- E - Constante de Euler, la base de los logaritmos naturales, aproximadamente 2.718
- LN2 - Logaritmo natural de 2, aproximadamente 0.693
- LN10 - Logaritmo natural de 10, aproximadamente 2.303
- LOG2E - Logaritmo de E con base 2, aproximadamente 1.443
- LOG10E - Logaritmo de E con base 10, aproximadamente 0.434
*/


let numeroMax = Math.max(25,12,2,3,5,23,54,23,24);
let numeroRan = Math.random()*100;
numeroRan = Math.round(numeroRan); //con foor se puede redondear hacia abajo para que no toque 100 y generar un numero sin contar 0 y 100 Math.floor(numeroRan+1) arriba *99

document.write("<br><br> TRABAJANDO EN objetoMath");
document.write("<br>" + numeroMax);
document.write("<br>" + numeroRan);

//PROBLEMAS 6:20