// hackerrank challenge, mock test for week-4

'use strict'

let str1 = 'abcdec';
let str2 = 'abbcebdf';


console.log(`result of the anagram function for input ${str2}: ${anagram(str2)}`);

function anagram(str) {

    if (str.length % 2 != 0 ) {
        return -1;
    }

    // split the string into 2 equal strings

    let s1 = str.slice(0, str.length / 2);
    let s2 = str.slice(str.length / 2);
    console.log(`s1: ${s1}, s2: ${s2}`);

    let count = 0;
    let s2Arr = s2.split('');
    console.log(`s2Arr: ${s2Arr}`);

    for (let i of s1) {
        console.log(`i of s1: ${i}`);
        if (s2Arr.includes(i)) {
            console.log(`s2Arr.includes(i)?: ${s2Arr.includes(i)}`);
            count++;
           let charToRemove = s2Arr.indexOf(i);
           console.log(`charToRemove: ${charToRemove}`);
           s2Arr.splice(charToRemove, 1);
           console.log(`new s2Arr: ${s2Arr}`);
        }
    }
    return str.length / 2 - count;
}