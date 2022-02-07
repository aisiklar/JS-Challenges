// hackerrank challenge

// find the number of pairs (i, j) such that:
// a) i < j
// b) (ar[i] + ar[j]) % k == 0;

'use strict';
// original question
/* 
const fs = require('fs');

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
 */
/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n, k, ar) {
    // Write your code here
    console.log(n); //test
    console.log(k); //test
    console.log(ar); //test
    let count = 0;
    for (let i = 0; i < n; i++) {
        console.log(`i = ${i}`); //test
        for (let j = i + 1; j < n; j++) {
            console.log(`j = ${j}`); //test
            if ((ar[i] + ar[j]) % k == 0){
                count++;
                console.log(`(ar[i] + ar[j]) % k = 0, i = ${i}, j = ${j}, ar[i] = ${ar[i]}, ar[j] = ${ar[j]}, 
                \   count = ${count}`);
            }
            console.log(`here, count = ${count}`);
        }
    }
    return count;

}

console.log(divisibleSumPairs(6, 3, [1,3,2,6,1,2]));

// original question
/* 

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = divisibleSumPairs(n, k, ar);

    ws.write(result + '\n');

    ws.end();
}
 */