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

// timeConversion function takes "array" as arguments
let convertedTime1 = timeConversion(time1.split(''));
let convertedTime2 = timeConversion(time2.split(''));
let convertedTime3 = timeConversion(time3.split(''));
let convertedTime4 = timeConversion(time4.split(''));

console.log(`convertedTime1 = ${convertedTime1}`);
console.log(`convertedTime2 = ${convertedTime2}`);
console.log(`convertedTime3 = ${convertedTime3}`);
console.log(`convertedTime4 = ${convertedTime4}`);

function timeConversion(s) {

    // Write your code here
    // the s argument is expected to be in the form: aa:bb:ccAM or aa:bb:ccPM
    // check if the last two items of the array (converted to string) is AM or PM
    if (s.slice(8, 10).join('') === 'AM' ) {
        // if AM, the 24 hour conversion can be done by taking modulus of 12
        // it is important to have the result "2 digits". Therefore, prefixed 0, and take last two elements
        let first2Digits = ('0' + (parseInt(s.slice(0,2).join('')) % 12)).slice(-2);
        return replaceDigits(s, first2Digits);
    } else if (s.slice(8, 10).join('') === 'PM') {
        if (parseInt(s.slice(0, 2).join('')) == 12) {
            var first2Digits = '12';
        } else {
            first2Digits = (12 + parseInt(s.slice(0, 2).join(''))).toString() ;
        }
        return replaceDigits(s, first2Digits);
    }
}
// replace the first two items with the new values and return a string s
function replaceDigits(s, first2Digits) {
    s.splice(0, 2, first2Digits[0], first2Digits[1]);
    s.splice(8);
    return s.join('');
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