// hackerrank challenge
/*
Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.
Lily decides to share a contiguous segment of the bar selected such that:
The length of the segment matches Ron's birth month, and,
The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate
Function Description
Complete the birthday function in the editor below.
birthday has the following parameter(s):
int s[n]: the numbers on each of the squares of chocolate
int d: Ron's birth day
int m: Ron's birth month
Returns
int: the number of ways the bar can be divided
*/
'use strict'

//inputs
let s = [ 1, 2, 1, 3, 2 ];
let d = 3;
let m = 2;

// to test various inputs, change the inputString below:
let inputString;
inputString = '2 5 1 3 4 4 3 5 1 1 2 1 4 1 3 3 4 2 1'
//inputString = '5 2 2 1 5 3 2'
let s1 = inputString.split(' ').map(x => parseInt(x, 10));
console.log(s1);
let d1 = 9;
let m1 = 3;

console.log(birthday(s1, d1, m1));



function birthday(s,d,m) {

    let count = 0;
    for (let i = 0; i < s.length; i++) {
        console.log(`i = ${i}`);
        let subArr = s.slice(i, i + m);
        console.log('subArr:');
        console.log(subArr);
        let subArrSum = subArr.reduce((prevValue, curValue) => prevValue + curValue);
        console.log(`subArrSum = ${subArrSum}`);
        if (subArrSum == d) {
            count++;
            console.log(`count = ${count}`);
        }
    }
    return count;
}

