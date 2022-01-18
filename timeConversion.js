/*
Hackerrank time conversion challenge.
convert from 12 hour time format to 24 hour time format

input: 12:00:01AM
expected output: 00:00:01
*/


'use strict';

let time1 = "12:01:05AM"; // expected output: "00:01:05"
let time2 = "07:01:05AM"; // expected output: "07:01:05"
let time3 = "12:01:05PM"; // expected output: "12:01:05"
let time4 = "07:05:00PM"; // expected output: "19:05:05"

let convertedTime1 = timeConversion(time1);
let convertedTime2 = timeConversion(time2);
let convertedTime3 = timeConversion(time3);
let convertedTime4 = timeConversion(time4);

console.log(`convertedTime1 = ${convertedTime1}`);
console.log(`convertedTime2 = ${convertedTime2}`);
console.log(`convertedTime3 = ${convertedTime3}`);
console.log(`convertedTime4 = ${convertedTime4}`);

function timeConversion(s) {

    // Write your code here
    // the s argument is expected to be in the form: aa:bb:ccAM or aa:bb:ccPM
    console.log(`the input argument, s: ${s}`); //debug
    console.log(`the s.slice(8, 10) = ${s.slice(8, 9)}`); // debug

    if (s.slice(8, 10) == 'AM' ) {
        console.log("in the AM if block...") // debug
        let first2Digits = toString(parseInt(s.slice(0,2)) % 12);
        console.log(`first2Digits = ${first2Digits}`); //debug
        return s.splice(0, 2, first2Digits);
    } else if (s.slice(8, 10) == 'PM') {
        console.log("in the PM if block...") // debug
        if (parseInt(s.slice(0, 2)) == 12) {
            console.log("in the PM & 12 if block...") // debug
            let first2Digits = '12';
            console.log(`first2Digits = ${first2Digits}`); //debug
        } else {
            console.log("in the PM & else block...") // debug
            let first2Digits = toString(12 + parseInt(s.slice(0, 2))) ;
            console.log(`first2Digits = ${first2Digits}`); //debug
        }
        return s.splice(0,1,first2Digits);
    }

}


/* Below is hackerrank original question

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
/*
function timeConversion(s) {
    // Write your code here
    // the s argument is expected to be in the form: aa:bb:ccAM or aa:bb:ccPM

    if (s.slice(8, 9) == 'AM' )

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}

*/