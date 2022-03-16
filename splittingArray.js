//freecodecamp challenge
// splitting an array according to the 2nd argument passed in

// NOTE: how to make the alg. less time-complex?

'use strict'

let arr = ['a', 'b', 'c', 'd']; // if size = 2, output: [ ['a', 'b'], ['c', 'd'] ]
let arr2 = [0, 1, 2, 3, 4, 5, 6];
let arr3 = [0, 1, 2, 3, 4, 5];

console.log(splitArray(arr3, 3)); 

function splitArray(arr, size) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
        let temp = [];
        for (let j = 0; j < size; j++) {
            // if array element is zero, add it to temp
            if (arr[i+j] === 0){
                temp.push(arr[ i + j ]);
            }
            // if array element is not falsy, add it to temp (zero is falsy but it is managed above)
            if (!!arr[i+j]) {
                temp.push(arr[ i + j ]);
                console.log(`temp: ${temp}`);
            }
        }
        newArr.push(temp);
    }
    return newArr; 
}