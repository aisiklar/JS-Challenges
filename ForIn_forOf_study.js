'use strict'

let str = 'text';
let arr = ['t', 'e', 'x', 't'];


// for - in loop in strings
for (let i in str) {
    console.log(i);
}

console.log('\n');

// for - of loop in strings
for (let i of str) {
    console.log(i)
}

console.log('\n');

// for - in loop in arrays
for (let i in arr) {
    console.log(i);
}

console.log('\n');

// for - of loop in arrays
for (let i of arr) {
    console.log(i)
}

// in objects:
// for .. in gives the object properties (keys)
function Car(brand, year, doorQty, color) {
    this.brand = brand;
    this.year = year;
    this.doorQty = doorQty;
    this.color = color;
};
let myCar = new Car("BMW", 2022, 4, "white");
console.log(myCar); // Car { brand: 'BMW', year: 2022, doorQty: 4, color: 'white' }
for (let props in myCar) {
    console.log(props); //brand <br> year <br> doorQty <br> color
    console.log(typeof(props)); //string (her props'un altında string diye belirtir)
}

console.log(Object.keys(myCar)); //[ 'brand', 'year', 'doorQty', 'color' ]
