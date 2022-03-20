//hackerrank challenge, minimum absolute difference in an array

'use strict'

//inputs

let arr1 = [2, -2, 4]; // result=2 (for the pair: 2, 4 )
console.log(minimumAbsoluteDifference(arr1));

function minimumAbsoluteDifference(arr) {
    // Write your code here

    //sort arr
    arr = arr.sort((a, b)=> a-b);
    let min = Number.MAX_VALUE;
    //calculate the diff. between consecutive elements
    for (let i = 0; i < arr.length - 1; i++) {
        if (Math.abs(arr[i] - arr[i+1]) < min) {
            min = Math.abs(arr[i] - arr[i+1]);
        }
    }
    return min;
}
