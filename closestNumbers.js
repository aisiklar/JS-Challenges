//hackerrank challenge
// determine which pair or pairs of elements have the smallest absolute difference between them.
// ex:
// input: [5,2,3,4,1] --> output: smallest abs. diff is 1 so the output is: [1,2,2,3,3,4,4,5]

'use strict'


let arr1 = [5,2,3,4,1];
let arr2 = [
            -20, -3916237,
            -357920, -3620601,
            7374819, -7330761,
            30,  6246457,
            -6461594,   266854
            ]; // expected [-20,30]

console.log(arr2);

console.log('result is:');
console.log(closestNumber(arr2));

function closestNumber(arr) {

    //sort the array ascending
    arr = arr.sort((a,b) => a-b);
    console.log(`sorted arr: ${arr}`);

    let min = Number.MAX_SAFE_INTEGER;
    console.log(min)
    let result = [];

    // find the min abs. value between arr. elements
    for (let i = 0; i < arr.length; i++) {
        if (Math.abs(arr[i]-arr[i+1]) < min) {
            min = Math.abs(arr[i]-arr[i+1]);
            console.log(min);
        }
    }

    // add the pairs with min abs. value diff. to the result array
    for (let i = 0; i < arr.length; i++) {
        if(Math.abs(arr[i]-arr[i+1]) === min) {
            result.push(arr[i], arr[i+1]);
            console.log(result);
        }

    }
    return result;
}