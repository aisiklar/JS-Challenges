// regex study

// exercise 1
/* 
Your regex petRegex should return true for the string John has a pet dog.
Your regex petRegex should return false for the string Emma has a pet rock.
Your regex petRegex should return true for the string Emma has a pet bird.
Your regex petRegex should return true for the string Liz has a pet cat.
Your regex petRegex should return false for the string Kara has a pet dolphin.
Your regex petRegex should return true for the string Alice has a pet fish.
Your regex petRegex should return false for the string Jimmy has a pet computer.
 */

let petString = "John has a pet dog";
let petString1 = "Emma has a pet bird";
let petString2 = "LiZ hAs a pet cat";
let petString3 = "Alice has a pet fish";
let petRegex = /John has a pet dog|Emma has a pet bird|Liz has a pet cat|Alice has a pet fish/i;
let result = petRegex.test(petString2);
console.log(result);

let regex1 = /ab/;
let str1 = 'aba';
console.log(`testing1: ${regex1.test(str1)}`); //returns true

let regex2 = /^ab$/;
let str2 = 'aba';
console.log(`testing2: ${regex2.test(str2)}`); //returns false

let chewieRegex = /Aa*/g
let str3 = "He made a fair move. Screaming about it can't help you";
let str4 = "Let him have it. It's not wise to upset a Wookiee";
console.log(str3.match(chewieRegex));
console.log(str4.match(chewieRegex));