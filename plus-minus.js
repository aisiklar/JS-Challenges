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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
 
    let arrMinus = arr.filter(element => element < 0);
    //console.log("arrMinus: " + arrMinus );
    let arrPlus = arr.filter(element => element > 0);
    //console.log("arrPlus: " + arrPlus );
    let arrZero = arr.filter(element => element == 0);
    //console.log("arrZero: " + arrZero );
 
    // the challenge asks for number of "positive values" / total number of items and
    // the same for minus and zero values.
    // but if it asked for "summation of positive or neg or zero values, "reduce" method is a good way
    //const sumIt = (firstValue, secondValue) => firstValue + secondValue;
    // console.log(arrPlus.reduce(sumIt))

    console.log((arrPlus.length / arr.length).toFixed(6));
    console.log((arrMinus.length / arr.length).toFixed(6));
    console.log((arrZero.length / arr.length).toFixed(6));
}





function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
