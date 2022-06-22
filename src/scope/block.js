// let y const
function fruits() {
    if (true) {
        var fruit1 = 'Apple';       // funtion scope
        let fruit2 = 'Kiwi';        // block scope
        const fruit3 = 'Banana';    // block scope
        
        console.log(fruit2); 
        console.log(fruit3);
    }
    console.log(fruit1);
    // console.log(fruit2); // ERROR
    // console.log(fruit3); // ERROR
}

fruits();