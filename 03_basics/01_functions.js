


function sayMyName() {
    console.log("S");
    console.log("E");
    console.log("E");
    console.log("M");
    console.log("A");
}

//sayMyName // function reference
//sayMyName()  // function execution

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
    
// }
// function addTwoNumbers(num1, num2){
//     // let result = num1 + num2;
//     // return result;
//     return num1 + num2;
//     console.log("Seema");// cannot execute after return statement
    
    
// }

// const result = addTwoNumbers(3, 4)

// console.log("Result: ", result);

// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("Please enter a username");
//         return
         
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("seema"))  // seema just logged in
// console.log(loginUserMessage(""))  // just logged in
// console.log(loginUserMessage())  // undefined logged in


function calculateCartPrice(val1, val2, ...num1){  //rest operator 
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000)); // val1 = 200, val2 = 400 , num1 = [500, 2000] 


const user = {
    username : "seema",
    prices : 199
}
function handleObject (anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 500]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 600]));

