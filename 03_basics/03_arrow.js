const user = {
    username: "Seema",
    price: 999,

    welcomeMessage: function () {
        // console.log(`${this.username}, welcome to website`);
        // console.log(this); // refers current context
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);


// this is only used in object not in fuctions

// function chai(){
//     let username = "Seema"
//     console.log(this.username); //log undefined in console

// }

// chai()
// const chai = () => {
//     let username = "Seema"
//     console.log(this); 

// }

// chai()

// explicite return
// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }

//implicite return 
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = ( num1, num2 ) => ( num1 + num2 )

const addTwo = ( num1, num2 ) => ({ username: "seema" })
console.log(addTwo(3, 2))