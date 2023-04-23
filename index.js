const massMark = 78
const height = 1.69

console.log(massMark/ (height * height)); 


const massJhon = 92
const jhonHeight = 1.95

console.log(massJhon / (jhonHeight * jhonHeight));

const firstName = "Jhonas"
const age = 19

console.log(`I am ${firstName}`)


// Js type conversion

const birthYear = "1998";
// In Js If we Concatinate string with number the output will be a String As Js Prioritize String. So
// We Need to convert string to a number
const newYear = (Number(birthYear))
console.log(newYear + 18)

// Converting Number to String

console.log(String(20))


// Js Type Coersion
console.log("I am " + 23 + " years old");

let n = "1" + 1;
n = n - 1;

console.log(n);


// In Js There Are Five Falsy Valus
//  They Are : 0, "", NaN, null, Undefined

// Logical Operator == and ===
// Here is An Example

let personAge = 18

if (personAge === 18) {
    console.log("Yay! Its Working Perfectly");
}

// Differcence Between == and ===

// == only checks the value of a Variable and === checks value and type both for a variable

// Example

let a = 18;
let b = "18"

console.log(Boolean(a == b));  //Answer Will Be True
console.log(Boolean(a === b)); //Answer Will Be False

// Basic Bollean Logic
// And(&&), OR(||), Not(!)

// Expression is a piece of code that produce a value
// Example (3 + 4) is an expression because its produce a value
// Statement is a bigger piece of code that doesn't produce a value