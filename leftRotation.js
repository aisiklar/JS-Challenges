//hackerrank challenge
// shifting each element of an array to one unit to the left
// ex: [1,2,3,4,5] --> apply one rotateLeft() --> [2,3,4,5,1]
// inputs:
// d: amount to rotate by, like shift the elements "d" units to the left
// arr: array
// output: rotated array

// note: passed! but is there a less complex way to solve? less time complexity?

'use strict'

let arr = [1,2,3,4,5];
let d = 2;

console.log(`result is: ${rotateLeft(d, arr)}`);


function rotateLeft(d, arr) {
    console.log(`input arr: ${arr}`);
    let temp = [];
    for (let count = 1; count <=d; count++) {
        temp = arr[0];
        console.log(`count:${count}, temp: ${temp}`)
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i+1];
            console.log(`i:${i}, arr[i]=${arr[i]} `)
        }
        arr[arr.length-1] = temp;
        console.log(`arr[n-1]: ${arr[arr.length-1]}`);
    }

    console.log(`the output: ${arr}`)
    return arr;
}