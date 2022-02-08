// hackerrank challenge
"use strict";

let grades = [4, 41, 40, 48, 37, 38, 89, 92]; //test data

console.log(gradingStudents(grades));

function gradingStudents(grades) {
  // Write your code here

  console.log("grades, original:"); //test
  console.log(grades); //test
  let nextMultFive;
  let newGrades = [];
  grades.forEach((element) => {
    console.log(`element = ${element}`); //test
    // find nextMultFive, bigger than each of the array element

    for (let i = element + 1; i <= element + 5; i++) {
      if (i % 5 == 0) {
        nextMultFive = i;
        console.log(`nextMultFive = ${nextMultFive}`); //test
        break;
      }
    }
    console.log(`nextMultFive = ${nextMultFive}`); //test
    if (element >= 38 && nextMultFive - element < 3) {
      console.log("in the if block");
      newGrades.push(nextMultFive);
      console.log(newGrades); //test
    } else {
      console.log("in the else block");
      newGrades.push(element);
      console.log(newGrades); //test
    }
  });
  console.log("new grades array:");
  console.log(newGrades); //test
  return newGrades;
}
