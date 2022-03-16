//hackerrank challenge
// separate the strings.
// requirements
// no leading zeros
// a[i] - a[i-1] = 1
// some samples of "beautiful" numbers:
// '1234' --> '1', '2', '3', '4'
// '91011' --> '9', '10', '11'
// '99100' --> '99', '100'
// return YES, x (first number in the separated series) or NOxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

"use strict";

let s1 = "1234";
let s2 = "91011";
let s3 = "99100";
let s4 = "910111213";
let s5 = "9101112131";
let s6 = "91011";
let s7 = '90071992547409929007199254740993'

console.log("the result is below:");
separateNumbers(s5);

function separateNumbers(s) {
  let len = s.length; // for s5, 10
  let lastStep = parseInt(len / 2, 10); // for s5, 5
  console.log(`len = ${len}, lastStep = ${lastStep}`); //test
  let flag;
  let flag1 = false;
  for (let step = 1; step <= lastStep; step++) {
    // define "first" number, to return, if conforms the requirements
    console.log(`step: ${step}`); //test
    let first = s.slice(0, step); //for s5, 9
    console.log(`first: ${first}`); //test
    // enter the main algo. loop
    let m = 0;
    let digit = 1;
    // define value1, as str
    let value1 = first; //for s5, 9
    console.log(`value1 = first = ${value1}`); //test
    flag = true;
    while (m + 1 + digit <= len && flag) {
      //define value2, to compare with value2
      // value1 is defined already
      console.log(`beginning of while block, value1: ${value1}`); //test
      //let targetNumber = parseInt(value1, 10) + 1; //for s5, 9+1,
      let targetNumber = BigInt(value1) + BigInt('1');
      console.log(`targetNumber: ${targetNumber}`); //test
      let digit = targetNumber.toString().length;
      console.log(`digit number of targetNumber: ${digit}`); //test
      let value2 = s.slice(m + step, m + step + digit); //for s5, slice(1,3) = '10'
      console.log(`m+step: ${m + step}, m+step+digit: ${m + step + digit}`); // test
      console.log(`value2 = ${value2}`); //test
      // check if value1 === value2
      if (value2 !== "") {
        if (targetNumber.toString() === value2) {
          // conforms the requirement, flag is true, s5,
          value1 = value2; //'10'
          m += digit; // for s5, 0+2,
          console.log(`in the if block, value1:${value1}, m: ${m} `); //test
          // here, returns to while loop
          // value1 = '10'
          // targetNumber = 11, digit = 2; slice(3,5) = value2 = 11
          // check for value2 === targetNumber
          // yes > value1 = value2 (11), m = m + digit (4),
        } else {
          flag = false;
        }
      } else {
        m++;
      }
    }
    console.log(`outside the while block... flag: ${flag}`); //test
    if (flag) {
      console.log("YES" + " " + first);
      flag1 = true;
    }
  }
  if (!flag1) {
    console.log("NO");
  }
}
