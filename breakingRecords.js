// hackerrank challenge, Breaking the Records.
// find the number of breaking records for max score and breaking records for min score
// input= scores array

'use strict';

let scores1 = [10, 5, 20, 20, 4, 5, 2, 25, 1]; // expected output: 2, 4 
let scores2 = [10, 2, 1, 11, 4, 5, 2, 10, 11]; // expected output: 1, 2
console.log(breakingRecords(scores1));
console.log(breakingRecords(scores2));

function breakingRecords(scores) {
    let minCount = 0;
    let maxCount = 0;
    let min = scores[0];
    let max = scores[0];
    
    // loop through the scores array
    
    scores.forEach(element => {
        if (element > max) {
            max = element;
            maxCount ++;
        } else if (element < min) {
            min = element;
            minCount ++;
        }
    });
    let result = [maxCount, minCount];
    return result; 
}

// original hackerrank question

/*
'use strict';

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

/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */
/*

function breakingRecords(scores) {
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}

*/