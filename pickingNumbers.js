// hackerrank challenge

//Given an array of integers, find the longest subarray where the absolute difference between 
// any two elements is less than or equal to 1.
// output: length of the max arr

'use strict'

// test case
let a = [ 4, 6, 5, 3, 3, 1 ] // expected output: 3 

// another test case
let bStr = '66 '.repeat(100);
////console.log(`bStr: ${bStr}`); //test
let b = bStr.split(' '); // expected output: 100
//console.log(`b.length: ${b.length}`); //test


console.log(`the result = ${pickingNumbers(b)}`);

function pickingNumbers(a) {
    let result = [];
    let temp = [];
    let testArr = [];

    for (let i = 0; i < a.length; i++){
        //console.log(`temp = ${temp} `); //test
        //console.log(`first for loop, i:${i} `); //test
        for (let j = i + 1; j < a.length; j++) {
            // assignt testArr, [a[i], a[j]] and test for diffOfElements <= 1
            testArr = [a[i], a[j]];
            //console.log(`i:${i}, j:${j}, testArr: ${testArr} `); //test
            if (diffOfElements(testArr)) {
                //console.log('in the diffOfElements if block...') //test
                temp = [...testArr];
                for (let k = j+1; k < a.length; k++) {
                    //console.log(`in k block, temp: ${temp}`); //test
                    testArr = [...temp];
                    //console.log(`in k block, after testArr = temp, testArr: ${testArr}`);//test
                    testArr.push(a[k]);
                    //console.log(`in k block, after push(a[k]), testArr  = ${testArr} `); //test
                    //console.log(`in k block, after push(a[k]), temp  = ${temp} `); //test
                    if (diffOfElements(testArr)) {
                        temp = [...testArr];
                    }
                }
                //console.log(`temp: ${temp}`);
                if (temp.length > result.length) {
                    result = [...temp];
                }
            } else {
                //console.log('diffOfElements is false...') //test
            }
        }
    }
    console.log(`result: ${result}`);
    return result.length;
}


/* let b = [4, 3, 4, 3];
//console.log(diffOfElements(b));
 */
function diffOfElements(subArr) {
    let subResult = true;
    //console.log(`subArr in diffOfElements = ${subArr}`) //test
    for (let i = 0; i < subArr.length; i++) {
        for (let j = i + 1; j < subArr.length; j++) {
            if (Math.abs(subArr[i] - subArr[j]) > 1) {
                //console.log(`subArr, i = ${i}, j = ${j}`) //test
                //console.log(`Math.abs(subArr[i] - subArr[j]): ${Math.abs(subArr[i] - subArr[j])}`) //test
                subResult = false
                //console.log(`output of diffOfElements: ${subResult}`);//test
                return subResult;
            }
        }
    }
    //console.log(`output of diffOfElements: ${subResult}`);//test
    return subResult;
}