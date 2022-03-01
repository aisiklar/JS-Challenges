// hackerrank challenge, migratory birds
// input = [1, 1, 2, 2, 3] output = 1
// input = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4], output = 2;

'use strict'

let arr1 = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
let arr2 = '2 4 3 2 3 1 2 1 3 3'.split(' ');
let arr3 = '1 2 3 4 5 4 3 2 1 3 4'.split(' '); // expected output: 3

console.log(findFrequency(arr3));


function findFrequency(arr) {
    // sort the arr
    arr = arr.sort((a,b) => a - b);
    console.log(`sorted arr = ${arr}`);
    let counts = {};
    for (let num of arr ){
        // define an object. Keys are the items of arr, values are the frequencies
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    console.log('counts: ');
    console.log(counts);

    // find the max freq.
    let maxFreq = Math.max(...Object.values(counts));
    console.log(`maxFreq = ${maxFreq}`);
    let result = 0;
    //find which item has freq. of maxFreq
    for (let i of arr) {
        console.log(`i = ${i}`);
        console.log(`counts[i]: ${counts[i]}`);
        if (counts[i] === maxFreq) {
            result = i;
            console.log(`result in if block: ${result}`);
            break;
        }
    }
    return result;
}