// hackerrank challenge (week-2)

// input is an integer in base 10
// in a 32 bit system, convert it to base 2, than take negative of it (all zeros to 1, all 1 to 0)

/*
sample inputs:
3 
2147483647 
1 
0

sample outputs:
2147483648 
4294967294 
4294967295
*/

'use strict'

let inputArr = [3, 2147483647, 1, 0 ];
inputArr.forEach(x => {
    let result = flippingBits(x);
    console.log(`result = ${result}`);
});


function flippingBits(n) {
    //console.log(n); //test
    //convert it to string in base 2
    let numberBase2 = n.toString(2);
    console.log(`n = ${n}, numberBase2: ${numberBase2} `); //test
    // number of bits currently
    let len = numberBase2.length;
    //console.log(`len = ${len}`);//test
    //complete it to 32 bits
    let nModified = '0'.repeat(32 - len) + numberBase2;
    let nInvertedBase2 = '';
    console.log(`nModified = ${nModified}`); //test
    for (let letter of nModified) {
        let newLetter = (1 - parseInt(letter)).toString();
        nInvertedBase2 = nInvertedBase2 + newLetter;
        //console.log(`letter: ${letter}, newLetter: ${newLetter}`); //test
    }
    //console.log(`nInvertedBase2 = ${nInvertedBase2}`);//test
    //console.log(`returned: ${parseInt(nInvertedBase2, 2)}`) //test
    return parseInt(nInvertedBase2, 2);




}