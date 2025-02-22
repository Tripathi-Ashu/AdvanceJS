// alert(3 + 3)  // we are using nodejs not react

// number 
//bigint 
// string = "" 
// boolean => true /false 
// null => standlone value 
// undefinfd =>  abhi value asing nahi hui hai 
// symbol => unique data type 


// obeject 

console.log(typeof null); //object 

// ---------------------------------- Primitev data type , call by value , 7 types , stack , value ka copy milta hai 

// Js is dynamicly typed language
// String  , Number ,  Boolean  , null , undefine , Symbol , BigInt 

// ---------------------------------- Non primitev , refrince type  , heap , value ka refirence milta hai 


// Array , object , functions  

const id  = Symbol("123")
const id2 = Symbol("123")

console.log(id === id2);   // ----> false 

const myFun = function (){
    console.log("Hii")
}

