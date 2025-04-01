const user = {
    userName : "ashutosh" ,
    login: 8 ,
    singedIn: true,

    getUserDetails : function() {
        console.log("Got user details from database");
        
    }
}

console.log(user.userName);
console.log(user.getUserDetails());

