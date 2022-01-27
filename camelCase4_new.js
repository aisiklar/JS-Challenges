// hackerrank challenge, Camel Case 4 *** solved without regex ****
// change to the appropriate spelling according to the first 4 characters of the input string

/*
return the capital letters in an array > const regex = /[A-Z]/g; 

*/

/*
**** Sample Input ****
S;M;plasticCup()
C;V;mobile phone
C;C;coffee machine
S;C;LargeSoftwareBook
C;M;white sheet of paper
S;V;pictureFrame

**** Sample Output ****
plastic cup
mobilePhone
CoffeeMachine
large software book
whiteSheetOfPaper()
picture frame
*/

// the input format on the hackerrank challenge
let input3 = "\
S;V;iPad\n\
C;V;mobile phone\n\
C;M;mouse pad\n\
C;C;code swarm\n\
S;C;LargeSoftwareLongBook\n\
S;M;myMethod()";

let input4 = "\
C;V;can of coke\n\
S;M;sweatTea()\n\
S;V;epsonPrinter\n\
C;M;santa claus\n\
C;C;mirror\
";

processData(input4);

function processData(input) {
    
    //console.log(input); //test
    //console.log(typeof(input)); //test

    // convert input (string) to array, splitting at \n
    let inputArr = input.split('\n');
    console.log(inputArr); //test
    //console.log(inputArr[0]); //test
     inputArr.forEach((element, index) => {
        console.log(index, ' ', element);
    }); //test
     
    inputArr.forEach((element, index) => {
        //console.log(`element: ${element}`); //test
        inputStr = element.toString();
        // check for the first char for S and C
        if (inputStr[0] == 'S') {
            // split case
            //check for the 3rd char, for V, M or C
            switch (inputStr[2]) {
                case 'V':
                    //splitVariable
                    //console.log('splitVariable....');//test
                    console.log((inputStr.slice(4).replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase()))
                    break;
                case 'M':
                    //splitMethod
                    //console.log('splitMethod......');//test
                    console.log(((inputStr.slice(4).replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase())).slice(0, -2));
                    break;
                case 'C':
                    //splitClass function
                    //console.log('splitClass....'); //test
                    console.log((inputStr.slice(4).replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase()))
                    break;
            }
        } else if (inputStr[0] == 'C') {
            // combine case
            switch (inputStr[2]) {
                case 'V':
                    //combineVariable function
                    //console.log('combineVariable'); //test
                    //${s[0].toUpperCase()}${s.slice(1)}
                    //inputStr1 = inputStr.slice(4).replace(/^(.)|\s+(.)/g, c => c.toUpperCase())
                    inputStr = inputStr.slice(4).replace(/(\s)([a-z])/g, c => c.toUpperCase());
                    console.log(inputStr.replace(/\s/g, ''));
                    break;
                case 'M':
                    //combineMethod function
                    //console.log('combineMethod');//test
                    inputStr = inputStr.slice(4).replace(/(\s)([a-z])/g, c => c.toUpperCase());
                    console.log(inputStr.replace(/\s/g, '') + '()');
                    break;
                case 'C':
                    //combineClass function
                    //console.log('combineClass');//test
                    inputStr = inputStr.slice(4).replace(/^(.)|\s+(.)/g, c => c.toUpperCase())
                    //console.log(`inputStr: ${inputStr}, inputStr.length: ${inputStr.length}`); //test
                    console.log(inputStr.replace(/\s/g, ''));
                    break;
            }
        }
    })
} //end of processData()



/* 

// original hackerrank question:

function processData(input) {
    //Enter your code here
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

*/