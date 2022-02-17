// freecodecamp challenge
/*
We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and 
returns a new array. elem represents an element that may or may 
not be present on one or more of the arrays nested within arr. 
Modify the function, using a for loop, to return a filtered version of the passed array such 
that any array nested within arr containing elem has been removed.
*/
'use strict';

// solving with for loop:
function filteredArray(arr, elem) {
    console.log(arr);
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        console.log(`i = ${i}, arr[i] = ${arr[i]}`); //test
        if (!arr[i].includes(elem)) {
            newArr.push(arr[i]);
            console.log('newArr:'); //test
            console.log(newArr); //test
      }
    }
    // Only change code above this line
    return newArr;
  }

// solving with Array.filter() method
  /*
function filteredArray(arr, elem) {
    console.log(arr);
    let newArr = [];
    // Only change code below this line
    let result = arr.filter((item, index)=> { 
        return !item.includes(elem) })
    console.log(result);
    newArr = [...result];
    // Only change code above this line
    return newArr;
  }


  */
  console.log(filteredArray([[3, 2, 3], [1, 6, 4], [3, 13, 26], [19, 3, 9]], 3));