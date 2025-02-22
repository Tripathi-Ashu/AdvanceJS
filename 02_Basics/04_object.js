const tinder = new Object()   // singulton object 

const regularUser = {
    email:"saadasf",
    fullname: {
        userFullName:{
            firstName:"Ashutosh",
            lastName:"tripathi"
        }
    }
}

console.log(regularUser.fullname?.userFullName.firstName);

// combine the object 

const obj1= {1: "a" , 2:"b"}
const obj2 = {3: "a" ,4 : "b"}

const obj3 = Object.assign({}, obj1 ,obj2)

const obj4 = { ...obj1 , ...obj2}              // spred operator 

const users = [
    {
        id:1
    },
    {
        id:1
    },
    {
        id:1
    },
    {
        id:1
    }
]

users[1].id

console.log(Object.keys(tinder)); 
console.log(Object.values(tinder)); 
console.log(Object.entries(tinder));          // give a array  to u uset the loop upon 


tinder.hasOwnProperty("islogged")


