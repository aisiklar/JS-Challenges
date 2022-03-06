// hackerrank challenge, between two sets

// requirements
// find the numbers that fulfill following 2 conditions:
// cond1:
// number % all numbers in a = 0
// cond2:
// all numbers in b % number = 0

'use strict'

let a = [2, 6];
let b = [24, 36];

console.log(`result = ${getTotalX(a,b)}`)

function getTotalX(a,b) {
    let result = [];
    let maxA = Math.max(...a);
    let minB = Math.min(...b);

    for (let i = maxA; i <= minB; i++) {
        let cond1 = true;
        let cond2 = true;
        for (let itemA of a) {
            //console.log(`itemA is: ${itemA}`);
            if (i % itemA != 0) {
                cond1 = false;
                break;
            }  
        }
        if (cond1 == true) {
            for (let itemB of b){
                if (itemB % i != 0) {
                    cond2 = false;
                    break
                }
            }
            if (cond1 == true && cond2 == true) {
                result.push(i);
            }
        }
    }
    return result;
}
