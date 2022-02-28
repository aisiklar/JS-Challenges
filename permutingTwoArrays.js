// hackerrank challenge
/*
There are two -element arrays of integers, A and B . 
Permute them into some  A' and  B' such that the relation A'[i] + B'[i] >= k  holds for all i where 0 < i < n   .
There will be q  queries consisting of A, B and k. For each query, return YES if some permutation A', B'  
satisfying the relation exists. Otherwise, return NO

*/

'use strict'

let k = 10;
let A = [ 2, 1, 3 ];
let B = [ 7, 8, 9 ];
let k2 = 5;
let A2 = [ 1, 2, 2, 1 ];
let B2 = [ 3, 3, 3, 4 ];
let k3 = 91;
let A3 = [18, 73, 55, 59, 37, 13, 1, 33];
let B3 = '81 11 77 49 65 26 29 49'.split(' ').map(item => {
    return parseInt(item)});
//let B3 = '81 11 77 49 65 26 29 49'.split(' ').map(Number);

let kx = 94;
let stringA = '84 2 50 51 19 58 12 90 81 68 54 73 81 31 79 85 39 2';
let stringB = '53 102 40 17 33 92 18 79 66 23 84 25 38 43 27 55 8 19';

let arrA = stringA.split(' ').map(item => parseInt(item, 10));
let arrB = stringB.split(' ').map(item => parseInt(item, 10));

console.log(arrA);
console.log(arrB);

console.log('arrB sorted:');
console.log(arrB.sort((a, b) => a - b));

console.log(twoArrays(kx, arrA, arrB));

function twoArrays(k, A, B) {
    // Write your code here
    // define diff = [], such that diff[i] = k - B[i]
    let result = 'YES';

    let diffReq = [];
    for (let item of B) {
        diffReq.push(k - item);
    }
    console.log('diffReq array:'); //test
    console.log(diffReq); //test
    console.log('A');
    console.log(A);

    let diffReqSorted = diffReq.sort((a, b) => a - b);
    let aSorted = A.sort((a, b) => a - b);

    console.log('diffReqSorted array:'); //test
    console.log(diffReqSorted); //test
    console.log('aSorted');
    console.log(aSorted);
    for (let i = 0; i < aSorted.length; i++) {
        if (diffReqSorted[i] > aSorted[i]) {
            result = 'NO';
        }
    }
    return result;
}
