// hackerrank challenge
// count the number of valleys
// valley: a consecutive steps down the hill and later reaching to sea level

// inputs: integer step number and string path

'use strict'

let steps = 8;
let path = 'UDDDUDUU';

console.log('number of valleys:')
console.log(countingValley(steps, path));

function countingValley(steps, path) {
    //console.log(`steps: ${steps}, path: ${path}`); //test
    // valley qty: count
    let count = 0;
    // convert path to an array
    let pathArr = path.split('');
    //console.log(pathArr); //test

    // define level arr. Each element defines the respective alt. to sea level
    let level = [0];

    // iterate through pathArr
    pathArr.forEach((step, index) => {
        if (step === 'U'){
            level.push(level[index] + 1);
        } else if (step === 'D') {
            level.push(level[index] - 1); 
        }
        //console.log(`step: ${step}, level: ${level}`); //test
    })
    //console.log(`final level = ${level}`); //test

    for (let i = 0; i < level.length; i++) {
      //  console.log(`level[i] = ${level[i]}, level[i+1] = ${level[i + 1]}`); //test
        if (level[i] === 0 && level[i + 1] === -1) {
        //    console.log('in the level[i] if block'); //test
            for (let j = i + 2; j < level.length; j++) {
          //      console.log(`level[j] = ${level[j]}`); //test
                if (level[j] === 0) {
                    count++;
                    break;
                }
            }
        }
    }

    return count;
}