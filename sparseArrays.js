// hackerrank challenge
/*
There is a collection of input strings and a collection of query strings. 
For each query string, determine how many times it occurs in the list of input strings. 
Return an array of the results.
https://www.hackerrank.com/challenges/three-month-preparation-kit-sparse-arrays/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one
*/

// hackerrank original question:
'use strict';

/* const fs = require('fs');

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
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings, queries) {
    // Write your code here
    console.log(strings); //test
    console.log(queries); //test
    let result = Array(queries.length).fill(0);
    console.log(`array result initated:`); //test
    console.log(result); //test
    for (let j = 0; j < queries.length; j++){
        let count = 0;
        //console.log(`j = ${j}`); //test
        for (let i = 0; i < strings.length; i++) {
            //console.log(`i = ${i}`); //test
            if (queries[j] === strings[i]) {
                result[j] = ++count;
            }
        }
    }
    return result;
}

let strings = ['aba', 'baba', 'aba', 'xzxb'];
let queries = ['aba', 'xzxb', 'ab'];
console.log(matchingStrings(strings, queries));

// hackerrank original question:

/* 
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const stringsCount = parseInt(readLine().trim(), 10);

    let strings = [];

    for (let i = 0; i < stringsCount; i++) {
        const stringsItem = readLine();
        strings.push(stringsItem);
    }

    const queriesCount = parseInt(readLine().trim(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = readLine();
        queries.push(queriesItem);
    }

    const res = matchingStrings(strings, queries);

    ws.write(res.join('\n') + '\n');

    ws.end();
}
 */