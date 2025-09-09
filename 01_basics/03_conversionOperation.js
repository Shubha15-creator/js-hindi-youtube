let score ="55abc"

// const {score}= req.body          dont know what will be the type of score

console.log(typeof score)
console.log(typeof (score))
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "55" => 55
// "55abc" => NaN
// true => 1 : false  =>0
// undefined => NaN

let isLoggedIn = 1
let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn )

// 1 => true; 0 => false
// "" => false
// "shubh" => true

let someNumber = 66
let stringNumber = String(someNumber)
console.log(typeof stringNumber)