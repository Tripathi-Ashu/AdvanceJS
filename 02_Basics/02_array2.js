const marval = ["Ashu " ,"anjandn" ,"asfn"]
const dc = [ "hero" ,"lono" ,"kayu"]

marval.push(dc)  // concat  return new array , 

console.log(marval);

const all_new = [...marval ,...dc]  //spred operator

const another_array = [1 , 2, 3,[4 ,5,6,6],7 ,[8,9,0]]

const real_another_array = another_array.flat(Infinity) 
console.log(real_another_array);

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));
console.log(Array.from({name: "hitesh"}));   // intresting give [] 

let score1 =100 
let score2 =200
let score3 = 400 

console.log(Array.of(score1 ,score2 ,score3));



