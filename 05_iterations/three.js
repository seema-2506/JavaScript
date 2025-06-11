// for of 
// {"", "", ""}, [{}, {}, {}],

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    
    //console.log(num);
    
}

const greetings = "Hello World!"
for (const greet of greetings) {
    if(greet == " "){
         //console.log("Space is here");
        continue
    }
    //console.log(`each char is ${greet}`);
}

// Map => values are unique for map

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "Franch")


console.log(map);

for (const [key, value] of map) {
    console.log(key,':-', value);
    
}

// object is not iterable using map
// const myObj = {
//     "game1": 'NFS',
//     'game2': 'PS5'
// }
// for (const [key, value] of myObj) {
//     console.log(key,':-', value);
    
// }

