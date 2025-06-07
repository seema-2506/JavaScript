// global scope
//var c = 300
let a = 400

// block scope
if(true){
    let a = 20
    const b = 30
   console.log("Inner: ",a);
}

// for(let i = 0;i < array.length; i++){
//     const element = array[i];
// }

console.log(a);
// console.log(b);
//console.log(c);
