// hackerrank challenge
// find if two kangaroos meet at the same place after some jumps.
// input:
// kangaroo - 1: x1: start point, v1: distance per jump
// kangaroo - 2: x2: start point, v2: distance per jump

'use strict'


let x1 = 0;
let v1 = 2;
let x2 = 5;
let v2 = 3;

console.log(kangaroo(x1,v1,x2,v2));


function kangaroo(x1, v1, x2, v2) {
    if ((x2 - x1) % (v1 - v2) === 0) {
        if ((x2 - x1) / (v1 - v2) > 0){
            return "YES";
        } else { 
            return "NO"}
            
    } else {
        return "NO";
    }
}