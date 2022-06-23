var firstName; // undefined
firstName = 'Andres';
console.log(firstName);

// reasignamos
var lastName = 'David';     // declara y asigna
lastName = 'Ana';           // reasigna
console.log(lastName);

// redeclaracion
var secondName = 'David';   // declara y asigna
var secondName = 'Ana';     // redeclara y asigna
console.log(secondName);


// let

let fruit = 'Apple';    // declara y asigna
fruit = 'Kiwi';         // reasigna
/*
    let fruit = 'banana';   // redeclarando y asignando, ERROR:  no se puede redeclarar
*/
console.log(fruit);


// const
const animal = 'Dog';   // declara y asigna
/*
    animal = 'Lion';        // reasignando, ERROR: este no reasignara el nuevo valor.
    let animal = 'banana';   // redeclarando y asignando, ERROR: no se puede redeclarar
*/
console.log(animal);


const vehiculos = [];
vehiculos.push("🚗", "🚓", "🚕", "🛺", "🚙", "🚌", "🚘", "🚔");
console.log(vehiculos);

vehiculos.pop();
vehiculos.pop();
console.log(vehiculos);