// const userEmail = []

// if(userEmail){
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

//falsy value
// false, 0 , -0, BinInt 0n, "" , null , undefined , NaN

// truthy value
// "0", 'false', " ", [], {}, function(){}

// if( userEmail.length === 0 ){
//     console.log("Array is empty");
// }

// false == 0   // true
// false == ''  // true
// 0 == ''      // true

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }

//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



// console.log(val1);


// terniary operator

// condition ? true : false
const icedTeaPrice = 100
icedTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

