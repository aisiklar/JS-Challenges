// hackerrank challenge
// A pangram is a string that contains every letter of the alphabet. 
//Given a sentence determine whether it is a pangram in the English alphabet. 
//Ignore case. Return either pangram or not pangram as appropriate.

'use strict'

let inputStr1 = "We promptly judged antique ivory buckles for the next prize"; //output pangram
let inputStr2 = "We promptly judged antique ivory buckles for the prize"; // not pangram bc misses x

console.log(pangrams(inputStr2));

function pangrams(s) {
    let result = '';
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    // toLowerCase, remove white spaces, and convert to array
    s = s.toLowerCase().replace(/\s*/g, '').split('');
    alphabet = alphabet.split('');
    //console.log(`s = ${s}`)
    let ifPangram = true;
    alphabet.forEach((letter) => {
        if (s.includes(letter)) {
            //pass
        } else {
            ifPangram = false
        }
    })
    console.log(`ifPangram = ${ifPangram}`);
    if (ifPangram) {
        result = 'pangram';
    } else {
        result = 'not pangram';
    }
    return result;
}


/*
regex solution: does not work. 
    let result = '';
    let testRegex1 = /[a-z]/i;
    let testRegex2 = /abcdefghijklmnopqrstuvwxyz/gi;
    let ifPangram = testRegex1.test(s);
 
    console.log(ifPangram);
//    console.log(s.match(testRegex2));
    if (ifPangram) {
        result = 'pangram';
    } else {
        result = 'not pangram';
    }

*/