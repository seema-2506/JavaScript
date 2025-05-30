const accoutId = 154524
let accountEmail = "seema@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"

let accountState;
//accoutId= 2 // not allowed
/** prefer not to use var 
 * because of issue in block scope and functional scope
 */
accountEmail = "sam@gmail.com"
accountPassword = "2777463476"
accountCity = "patna"
console.log(accoutId);
console.table(["AccountId: "+accoutId,"accountEmail: "+ accountEmail,"accountPassword: "+ accountPassword,"accountCity: "+ accountCity,"accountState: "+ accountState])
