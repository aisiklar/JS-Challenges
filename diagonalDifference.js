// hackerrange challenge
// find the difference of left-to-right diagonal and right-to-left diagonal in a square matric.
// input is a square matrix.

arr = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ];
console.log(diagonalDifference(arr));

function diagonalDifference(arr) {
    console.log(arr)
    let len = arr.length;
    // sum from left to right (sumLR) and sum from right to left (sumRL)
    let sumLR = 0;
    let sumRL = 0;
    
    for (let i = 0; i < len; i++) {
        sumLR += arr[i][i];
        sumRL += arr[i][len -1 -i];
    }
    console.log(`sumLR = ${sumLR}, sumRL = ${sumRL}`);
    let result = sumRL - sumLR;
    result = result < 0 ? -1 * result : result;
    console.log(`returned result is: ${result}`);
    return result;
}