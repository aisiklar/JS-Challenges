// an exercise from freecodecamp (debugging chapter)
// write a script to create a 2D array, m x n
//

// method 1 ----- WORKS correctly
/* function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];
    for (let j = 0; j < n; j++) {
        row.push(0);
    }
    console.log(`row array= ${row}`); // test

    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
      console.log(`newArray is: ${newArray}`); //test
    }
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  console.log('final output is:');
  console.log(matrix); */
  
// method 2 ---- WORKS Correctly

function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
 
    for (let i = 0; i < m; i++) {
        let row = []; // this is critical.. Need to instantiate the row array from start
      // Adds the m-th row into newArray
      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
        console.log(`for j = ${j}, row array is:`)
        console.log(row);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
      console.log(`for i = ${i}, the newArray is:`);
      console.log(newArray);
    }
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  console.log('final output is:');
  console.log(matrix);
  
