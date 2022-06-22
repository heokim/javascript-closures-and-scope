function greeting() {
    let userName = 'Ana'; // function scope, scope local
    console.log(userName); 

    if (userName === 'Ana') {
        console.log(`Hello ${userName}!`);
    }
}

greeting();
console.log(userName); // Uncaught ReferenceError: userName is not defined