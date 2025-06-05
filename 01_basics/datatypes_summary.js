// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

//JavaScript is dynamically typed language
const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 234567899876543n



// Reference (Non primitive) Types:

// Array, Onjects, Functions


const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Seema",
    age: 23,
}

const myFunction = function (){
    console.log("Hello World!");    
}

console.log(typeof outsideTemp);

console.log(typeof anotherId); //Symbol

console.log(typeof bigNumber); //bigint

console.log(typeof heros); //object

console.log(typeof isLoggedIn); // boolean

console.log(typeof myFunction); //function

console.log(typeof myObj); //object
console.log(typeof score); //number 

console.log(typeof scoreValue); //number
console.log(typeof userEmail); //undefined





