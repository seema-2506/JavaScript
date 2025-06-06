// Arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktimaan", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4 , 5)
// console.log(myArr[0]);


// Array Methods

// add new value to the existing array
myArr.push(6)   
myArr.push(7)   
// console.log(myArr);

// delete the last element from the stack memory
myArr.pop()
// console.log(myArr);

// // add element at first in position in the existing array
// myArr.unshift(9)
// console.log(myArr);

// // remove element from first position
// myArr.shift()
// myArr.shift()

// // will search the the target element in the existig array and return boolean 
// console.log(myArr.includes(9));

// // will return the index of the target element
// console.log(myArr.indexOf(3)); 

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);


// console.log(typeof newArr);



// Slice , Splice

console.log("A ", myArr);

// slice - returns the value within range except outer range
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);


// splice
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);






