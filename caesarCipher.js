//hackerrank challenge, caesarCipher

"use strict";

let alphabet = "abcdefghijklmnopqrstuvwxyz";

let k = 87;
let str1 = "There's-starman-Waiting-in-the-sky";
let str2 = "middle-Outz"; //with k=2, result: okffng-Qwvb
let str3 = 'www.abc.xy'; //for k=87, output: fff.jkl.gh

console.log("the result is:");
console.log(caeserCipher(str3, k));

function caeserCipher(s, k) {
  let result = "";

  let mapped = alphabetMapping(k);

  for (let item of s) {
      console.log(`item in the for-of loop: ${item}`);
    if (!Object.keys(mapped).includes(item.toLowerCase())) {
      console.log(`item, not in the array: ${item}`);
      result += item;
    } else {
      //check if lowerCase
      if (item === item.toLowerCase()) {
        console.log(`item, which is already lowerCase: ${item}`);
        console.log(`mapped[item]: ${mapped[item]}`);
        result += mapped[item];
        console.log(`result, in build ${result}` );
      } else {
        console.log(`item, which is not lowerCase: ${item}`);
        console.log(`mapped[item] in else block: ${mapped[
            item.toLowerCase()
          ].toUpperCase()}`);
        result += mapped[item.toLowerCase()].toUpperCase();
      }
    }
  }

  return result;
}

function alphabetMapping(k) {
    console.log(alphabet);
    let alphabetArr = alphabet.split("");
    let modifiedAlphabet = [...alphabetArr];
    
    for (let count = 1; count <= k; count++) {
        let toAdd = modifiedAlphabet[0];
        modifiedAlphabet.shift()
        modifiedAlphabet.push(toAdd);
    }
    // map each letter
    let mapped = {};
    for (let elem of alphabetArr) {
      mapped[elem] = modifiedAlphabet[alphabetArr.indexOf(elem)];
    }
    console.log(mapped);
    return mapped;
  }

  // below alg. doesnt work if k > alphabet.length
/* function alphabetMapping(k) {
  console.log(alphabet);
  let alphabetArr = alphabet.split("");
  let modifiedAlphabet = [...alphabetArr];
  let toAddToEnd = alphabetArr.slice(0, k);
  modifiedAlphabet.splice(0, k);
  console.log(`modified Alphabet  after splice: ${modifiedAlphabet}`);
  modifiedAlphabet.push(...toAddToEnd);
  console.log(`modified Alphabet after rotated: ${modifiedAlphabet}`);

  // map each letter
  let mapped = {};
  for (let elem of alphabetArr) {
    mapped[elem] = modifiedAlphabet[alphabetArr.indexOf(elem)];
  }
  console.log(mapped);
  return mapped;
} */
