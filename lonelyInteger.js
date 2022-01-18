// hackerrank challenge, lonely integer

'use strict';

/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

let a = [1, 2, 2, 3, 1, 4] ;

console.log(lonelyInteger(a));
console.log(`now the array a: ${a}`);
console.log(lonelyInteger2(a));


// finding the unique element by creating a Set from array a
function lonelyInteger(a) {
    // Write your code here
    return [...new Set(a)];
}

function lonelyInteger2(a) {
    a.sort();
    console.log(`the sorted array a: ${a}`);
    a.filter(item => {
        console.log("entering the filter callback function");
        console.log(`the array a: ${a}`);
        console.log(`the item is ${item}`);
        if (item == a[a.indexOf(item) + 1]){
            // debug
            console.log("entering the if block");
            console.log(`the item is ${item}, and indexOf(item): ${a.indexOf(item)}
            and the a[a.indexOf(item) + 1] = ${a[a.indexOf(item)]}`)
            a.splice(a.indexOf(item), a.indexOf(item));
            console.log(`the array a after splice is ${a}`)
        }
    });
    return a;
}
