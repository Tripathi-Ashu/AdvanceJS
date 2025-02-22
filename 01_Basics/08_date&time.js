let myDate = new Date()
console.log(myDate.toString());

// toDateString() , toLocaleString() , typeof Date is Object ,

let mydate = new Date(2023 , 0 ,23)
console.log(mydate.toLocaleString());  

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000)); // seconds


