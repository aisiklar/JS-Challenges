// hackerrank challenge, Drawing Book

// inputs
// number of pages, n
// page that is requested, p
let n = 6;
let p = 2;

console.log(`result = ${pageCount(n,p)}`);

function pageCount(n, p) {
    // Write your code here
    let result = 0;
    console.log(`n = ${n}`);
    console.log(`p = ${p}`);
    let n1 = n % 2 == 0 ? n + 1 : n;
    let p1 = p % 2 == 0 ? p + 1 : p;
    console.log(`n1 = ${n1}, p1 = ${p1}`);
    
    result = Math.min((p1 - 1) * 0.5, (n1 - p1)* 0.5);

//    console.log(result);
    
return result;
}

