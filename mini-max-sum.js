'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    //console.log(arr);
    let arrSorted = arr.sort();
    const sumIt = (value1, value2) => value1 + value2;

    let miniSum = arrSorted.slice(0,4).reduce(sumIt);
    //console.log(miniSum);
    let maxiSum = arrSorted.slice(1,5).reduce(sumIt);
    //console.log(maxiSum);
    console.log(miniSum + " " + maxiSum);

}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

