// variables

var a; // declaracion
var b = 'b'; // declaracion y asignacion
b = 'bb'; // reasignacion
var a = 'aa' // redeclaracion


// Global Scope
var fruit = 'Apple'; // Global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

/**
 * Ejemplo 2
 * si no usanmos hacemos una declaracion de una variable y 
 * solamente hacemos una asignacion esta sera declarada una variable global
 */

function countries(){
    country = 'Paraguay'; // esta variable que no tiene una declaracion, sea una Global
    console.log(country);
}

countries();
console.log(country);