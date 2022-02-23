// hackerrank challenge
// find the number of pairs in an array

'use strict'


// inputs:
let ar1 = [10, 20, 20, 10, 10, 30, 50, 10, 20]
let n = ar1.length;

console.log(sockMerchant(n, ar1));


function sockMerchant(n, ar) {
    // Write your code here

    let pairsArr = [];

    for (let i = 0; i < ar.length; i++) {
        for (let j = i + 1; j < ar.length; j++) {
            if (ar[i] == ar[j]) {
                console.log(`i = ${i}, j = ${j}; ar[i] = ${ar[i]}, ar[j] = ${ar[j]}`);
                pairsArr.push(ar[i], ar[j]);
                console.log('pairsArr: ');
                console.log(pairsArr);
                // remove the first item of the pair:
                ar.splice(i, 1);
                console.log('after, removing the first item of the pair, ar: ');
                console.log(ar);
                // remove the second item of the pair:
                ar.splice(j-1, 1);
                console.log('after, removing the second item of the pair,ar: ');
                console.log(ar);
                i = j = 0;
            }
        }
    }
    return pairsArr.length / 2;

}
