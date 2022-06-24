console.log(nameOfDog);
var nameOfDog = 'Tigre';

/**
 * lo que esta sucediendo es:
 * 
 * var nameOfDog; // se sube arriba, hoisting
 * 
 * console.log(nameOfDog);
 * var nameOfDog = 'Tigre';
 */

// = = = = = = = = = = = = = = = = = = = = = = = 

imprimir();

function imprimir() {
    console.log(`imprimir: ${texto}`);
}

var texto = 'Buenos dias Andres!';

/**
 * lo realmente pasa es:
 * 
 * var texto;
 * function imprimir() {
 *     console.log(`imprimir: ${texto}`);
 * }
 * 
 * // todo lo que esta arriba de esta linea se a elevado, hoisting
 * 
 * imprimir();
 *  function imprimir() {
 *     console.log(`imprimir: ${texto}`);
 * }
 * 
 * var texto = 'Buenos dias Andres!';
 */