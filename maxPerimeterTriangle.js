// hackerrank challenge, maximum perimeter triangle

"use strict";

let sticks1 = [1, 3, 1, 1, 3];
let sticks2 = [1, 2, 3, 4, 5, 10];
let sticks3 = [1, 2, 3, 2, 2, 2];
let sticks4 = [1,2,3];
let sticks5 = [
    1000000000, 1000000000, 1000000000, 1000000000, 1000000000,
];

console.log(`sticks5 length = ${sticks5.length}`);

console.log(`the result is ${maxPerTri(sticks5)}`);

// Main function to return the result
function maxPerTri(sticks) {
  // check the input
  //console.log(sticks); //test
  //sort the sticks in ascending
  sticks = sticks.sort((a, b) => a - b);
  // check the new sorted sticks
  //console.log("sorted sticks:");
  //console.log(sticks); //test

  //find the non-degenerate triangles
  let triangles = findTriangles(sticks);
  if (triangles.length == 0) {
      return [-1];
  }

  // check the triangles
  console.log("non-degenerate triangles:");
  //console.log(triangles); //test

  //calculate the perimeter of all non-deg. triangles, i.e. triangles
  //store these as key-value pairs
  // key: the index in the triangles array
  // value: the perimeter of the related triangles.key
  let TriSums = {};
  for (let i = 0; i < triangles.length; i++) {
    //console.log(`send ${triangles[i]} to calcPerim function: `);
    let sum = calcPerim(triangles[i]);
    let index = i.toString();
    TriSums[index] = sum;
  }

  // check the TriSums object
  console.log("TriSums object is:");
  //console.log(TriSums); //test
  console.log(`the length of TriSumskeys = ${Object.keys(TriSums).length}`);

  //find the max of the values and related keys, an array
  let keysOfMaxValue = findMaxValueKey(TriSums);

  if (keysOfMaxValue.length == 1) {
      let index = parseInt(keysOfMaxValue[0], 10);
      console.log(`the index for triangles: ${index}`); // test
      console.log(triangles[index]); //test
      //sort the array
      let result = triangles[index].sort((a,b) => a - b);
      return result;
  } else {
      // if there are more than one triangle with max value:
      // we need to find the triangle(s) which has the lomgest max-side
      let longestMaxSide = findLongestMaxSide(triangles, keysOfMaxValue);
      if (longestMaxSide.length == 1) {
          let result = triangles[longestMaxSide[0]].sort((a, b) => a - b);
          console.log('the array to be returned:')
          console.log(result); //test
          return result;
      } else {
          // there are more than one triangles with longest max-sides
          // find the one with longest min-side
          let longestMinSide = findLongestMinSide(triangles, longestMaxSide);
          let result = [];
          for (let i = 0; i < longestMinSide.length; i++) {
              result.push(triangles[i]);
          }
          return result[0];
      }
  }

  return 0; //return the result
} // end of maxPerTri Function

// ******* Function *****
// find non-degenerate triangles
// for sorted arr, [a, b, c, d,....], if a + b > i, then non-degen.
function findTriangles(arr) {
  let triangles = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 2; j < arr.length; j++) {
      if (arr[i] + arr[i + 1] > arr[j]) {
        triangles.push([arr[i], arr[i + 1], arr[j]]);
      }
    }
  }
  return triangles;
}

// ******* Function *****
//calculate the perimeter of a triangle
function calcPerim(arr) {
  //console.log("calculating the perimeter of array:");
 // console.log(arr);
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  //console.log(`the sum of the passed arr = ${sum}`);
  return sum;
}

// ******* Function *****
//find the max of the values and related keys
function findMaxValueKey(TriSums) {
  let maxValue = Math.max(...Object.values(TriSums));
  // check the maxValue
  console.log(`max of the values is: ${maxValue}`);
  let keysOfMaxValue = [];  
  // check the keys, which have max Value
  for (let i of Object.keys(TriSums)) {
      //console.log(`i, which is the key: ${i}`);
      if (TriSums[i] == maxValue) {
          keysOfMaxValue.push(i);
      }
  }
  console.log('the TriSums keys, which have the max value, ie the max perimeter:');
  //console.log(keysOfMaxValue); //test
  return keysOfMaxValue
}

// ******* Function *****
// find the longest Max Side triangle
function findLongestMaxSide(triangles, keysOfMaxValue) {
    let max = 0;
    let longestMaxSide = [];
    for (let i = 0; i < keysOfMaxValue.length; i++) {
        let index = parseInt(keysOfMaxValue[i], 10);
        let longestSide = Math.max(...triangles[index]);
        //console.log(`longestSide for triangles[index], ${triangles[index]} is ${longestSide}`); //test
        if (longestSide >= max) {
            max = longestSide;
            longestMaxSide.push(index);
        }
    }
    console.log('the longestMaxSide is: ');
    console.log(longestMaxSide);
    return longestMaxSide;
}

function findLongestMinSide(triangles, longestMaxSide) {
    console.log('entering the longestMinSide function.....');
    let max = 0;
    let longestMinSide = [];
    for (let i = 0; i < longestMaxSide.length; i++) {
        let index = parseInt(longestMaxSide[i], 10);
        let minSide = Math.min(...triangles[index]);
        console.log(`longestSide for triangles[index], ${triangles[index]} is ${minSide}`); //test
        if (minSide >= max) {
            max = minSide;
            longestMinSide.push(index);
        }
    }
    console.log('the longestMinSide is: ');
    console.log(longestMinSide);
    return longestMinSide;
}