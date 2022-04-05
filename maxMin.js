//hackerrank challenge, Max Min
// minimize the "unfairness", from an array of k elements (arrPrime),
// given, an array, arr and k
// unfairness = max(arrPrime) - min(arrPrime)

// below code works but need a more efficient alg.

'use strict'

let k = 3;
let arr = [
    10,  100, 300,
   200, 1000,  20,
    30
 ];

 let arr2 = [1, 4, 7, 3];
 let k2 = 2;

 let arr3 = [4504, 1520, 5857, 4094, 4157, 3902, 822, 6643, 2422, 7288, 8245, 9948, 2822, 1784, 7802, 3142, 9739, 5629, 5413, 7232];
 let k3 = 5; 

 let arr4 = [
    6327,  571, 6599,  479, 7897, 9322, 4518,
     571, 6677, 7432,  815, 6920, 4329, 4104,
    7775, 5708, 7991, 5802, 8619, 6053, 7539,
    7454, 9000, 3267, 6343, 7165, 4095,  439,
    5621, 4095,  153, 1948, 1018, 6752, 8779,
    5267, 2426, 9649, 2190, 9103, 7081, 3006,
    2376, 7762, 3462,  151, 3471, 1453, 2305,
    8442
  ];
  let k4 = 8;

  let arr5 = [
    100, 200, 300,
    350, 400, 401,
    402
  ];
  let k5 = 3;
  

console.log(maxMin(k5, arr5));

function maxMin(k, arr) {
    //sort the arr
    let arrSorted = arr.sort((a, b) => a-b);
    console.log(arrSorted);
    // assign a min value, which is quite big originally
    let min = Math.max(...arr) - Math.min(...arr);

    // below alg. works but need a more efficient one!
    /* for (let i = 0; i < arr.length - k + 1; i++) {
        let arr2 = arrSorted.slice(i, i + k);
        let temp = Math.max(...arr2) - Math.min(...arr2);
        console.log(`i: ${i}, arr2: ${arr2}, temp: ${temp}; prev.Min: ${min}`);
        if (temp < min) {
            min = temp;
        }
    }
 */
    // below alg. is a faster one. passes the hackerrank tests against time criteria...
    for (let i = 0; i < arr.length - k + 1; i++) {
        let temp = arrSorted[i + k - 1] - arrSorted[i];
        console.log(`i: ${i}, arrSorted[i + k]: ${arrSorted[i + k - 1]}, arrSorted[i]: ${arrSorted[i]}, temp: ${temp}; prev.Min: ${min}`);
        if (temp < min) {
            min = temp;
        }
    }
   return min;


}