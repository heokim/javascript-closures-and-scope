// uso estricto
"use strict";
pi = 3.1415;
console.log(pi); // Error: porque la variable no se declaro

function myFunction() {
    "use strict";
    return pi = 3.1415;
}
console.log(myFunction()); // Error: porque dentro de myFunction() la variable de retorno no esta declarada

// la forma de corre todo el codigo siendo Estricto sin error seria:

"use strict";
const pi = 3.1415;
console.log(pi); 

// y 

function myFunction() {
    "use strict";
    const pi = 3.1415;
    return pi;
}
console.log(myFunction());