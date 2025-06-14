//const tinderUser = new Object() //singleton object

const tinderUser = {} // non singleton object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"

tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Seema",
            lastname: "Rani"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "seema@gmail.com"
    },
    {
        id: 1,
        email: "seema@gmail.com"
    },
    {
        id: 1,
        email: "seema@gmail.com"
    },
    {
        id: 1,
        email: "seema@gmail.com"
    },
    {
        id: 1,
        email: "seema@gmail.com"
    }
]
// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Seema"
}
// course.courseInstructor

const{courseInstructor: instructor} = course  // de-structuring objects
console.log(instructor);

// {
//     name: "seema",
//     coursename: "js in hindi",
//     price: "free"
// }


//json is basically a javascript object notation
[
    {},
    {},
    {}
]