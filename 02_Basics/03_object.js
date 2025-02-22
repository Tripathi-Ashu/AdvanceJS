// singlton  constrocutor jab banate hai jab litteral ki trha banate hai to nhi abnta hai 

// Object litters  non singlton object
const mySym = Symbol("Key1")

const JSUser = {
    name: "ashutosh",
    age:18 ,
    [mySym]: "mykey1",          // key1 = mykey1
    location:"jaipur",
    email: "hsdfidcb33",
    isLoggedIn: false,
    lastLoginDate:["Monday" , " Saturday"],
    "full_Name":"Ashusbdf"

}

//  Object.freeze(JSUser)
JSUser.email = "skbfshdbkds"          // Over write

console.log(JSUser.email);
console.log(JSUser[full_Name]);  
console.log(JSUser[mySym]); 

JSUser.greeting = function(){
    console.log("Hellow JS User");
    
}
JSUser.greetingTwo = function(){
    console.log(`Hellow JS User ${this.name}`);   // hello js user , ashutosh
    
}

console.log(JSUser.greeting)              // function return back    