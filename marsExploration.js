// hackerrank challenge
// find the nuöber of different / altered characters between the passed string s and the ideal / expected one
// expected string is multiples of "SOS".. like, SOSSOSSOSSOS....


'use strict'

let inputStr = "SOSSPSSQSSOR";

console.log(`the number of altered chars: ${marsExploration(inputStr)}`);

function marsExploration(s) {
    // define the length of the passed s
    let len = s.length;
    // find the ideal / correct / expected message
    let expectedMessage = "";
    for (let i = 1; i <= len/3; i++) {
        expectedMessage += "SOS";
    }
    console.log(`expected message = ${expectedMessage}`); //test
    // calc the number of differences between two strings
    let count = 0;
    for (let i = 0; i < len; i++) {
        if (s[i] !== expectedMessage[i]) {
            count++
        }
    }
    console.log(`number of differences: ${count}`);
    return count;
}