// hackerrank challenge, lonely integer

'use strict';
const fs = require('fs');

/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

let a = [1, 2, 2, 3, 1, 4] ;

console.log(lonelyInteger(a)); //must return [3, 4]


// array a = [1, 2, 2, 3, 1, 4] 
function lonelyInteger(a) {
    // construct a Set with one of each value from array a
    let mySet = new Set(a); // Set(4) { 1, 2, 3, 4 }
    console.log(mySet);
    // construct an array from the Set
    let myArr = Array.from(mySet);
    console.log(mySet); // Set(4) { 1, 2, 3, 4 }
    console.log(myArr); // [1,2,3,4]
    //define an array of multiples, to store all the elements with more than one in.
    let multiples = [];
    //iterate through each of element in array a
    a.forEach((element, index) => {
        for(let i = index + 1; i < a.length; i++) {
            if (element == a[i]) {
                multiples.push(element);
            }
        }
    })
    //console.log('multiples array:') //test
    //console.log(multiples); // [1,2]
    // find the difference between two arrays
    // myArr = [1,2,3,4]
    // multiples = [1,2]
    let lonelyInts = myArr.filter(x => !multiples.includes(x));
    return lonelyInts; // [3,4]


}
