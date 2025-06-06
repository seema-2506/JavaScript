// Singleton 
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser =  {
    name : "Seema",
    "full name": "Seema Rani",
    [mySym]: "mykey1",
    age : 23,
    location: "Pune",
    email : "seemaa@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "seema.rani@google.com"
// Object.freeze(JsUser)

// JsUser.email = "seema.rani@github.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

