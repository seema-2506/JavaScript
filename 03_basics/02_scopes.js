// global scope
//var c = 300
// let a = 400

// // block scope
// if(true){
//     let a = 20
//     const b = 30
//    //console.log("Inner: ",a);
// }

// for(let i = 0;i < array.length; i++){
//     const element = array[i];
// }

//console.log(a);
// console.log(b);
//console.log(c);


function one(){
    const  username = "Seema"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    //console.log(website);

    //two()
}

//one()

if(true){
    const username = "seema"
    if(username === "seema"){
        const website = " youtube1"
        //console.log(username + website);
    }
    //console.log(website);
    
}

// console.log(username);

// +++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++

// Hoisting

// hoisting possible
console.log(addone(4));

function addone(num){
    return num + 1
}


// console.log(addTwo(5)); // hoisting not possible


// function expression
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));


