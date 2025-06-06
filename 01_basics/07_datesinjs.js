// Dates 

// let myDate = new Date();
// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 6, 6)
// let myCreatedDate = new Date(2025, 6, 6, 16, 43)
// let myCreatedDate = new Date("2025-06-06")
let myCreatedDate = new Date("06-07-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); //in millisecond
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

 let newDate = new Date()
// console.log(newDate);
 
//  console.log(newDate.getMonth() + 1);
//  console.log(newDate.getDay());
 
//`${newDate.getDay()} and the time `  // String interpolation

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: ''
})
