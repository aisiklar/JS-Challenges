// hackerrank challenge
// if n (number of towers) is even:
// player two matches player one's moves. Always wins.
// if n is odd:
// player 1 makes a tower's height 1, and then matches player 2's moves. always wins.


'use strict'

// number of towers
let n = 2;

// height of each tower
let m = 6;

console.log(towerBreakers(n, m));

function towerBreakers(n, m) {
    return (m === 1 || n % 2 === 0) ? 2 : 1;
}