// Strict Mode
"use strict";

let hasDriverLicence = false;
const passTest = true;

if (passTest) hasDriverLicence = true
if(hasDriverLicence) console.log("I can Drive"); // Without Stict mode output will be nothing but with strict mode it will throw and error

// use strict helps us to prevent accidental error in code and helps us to fix the bug. Also it shows visible error in developer consol which makes our code more efficient to read and write. Also we can to use reserved keyword as variable which will implement in future while using strict mode.
// Example : interface, private


// FUNCTION: A function is a piece of code that we can reuse over and over in our code
function logger() {
    console.log("Hello From Function");
}
logger()

// function foodProcessor(apple, oranges) {
//     const juice = (`Please make ${apple} apple juice and also ${oranges} orange juice`)
//     return juice;
// }

// let appleJuice = foodProcessor(5, 0)
// console.log(appleJuice); // Output: Please make 5 apple juice and also 0 orange juice
 
// Function Decleration 
function clacAge1(birthYear) {
    const age = 2023 - birthYear
    return age
}
const age1 = clacAge1(1998)
console.log(`I am now ${age1} years old`);

// Function Expression
const clacAge2 = function (birthYear) {
    return 2023 - birthYear
}
const age2 = clacAge2(1998)
console.log(`I am now ${age2} years old`);

// Arrow Function

const arrFun = (a, b) => {
    return (a + b)
}

console.log(arrFun(10, 25));

// Function calling from another function
function cutFruitPieces(fruit) {
    return fruit * 4
}
function foodProcessor(apple, oranges) {
    const appleJuices = cutFruitPieces(apple)
    const orangePieces = cutFruitPieces(oranges)

    const juice = (`Please make ${appleJuices} apple juice and also ${orangePieces} orange juice`)
    return juice;
}

console.log(foodProcessor(2, 3));

// Introduction to Array
const friends = ["Micale", "Steven", "Peter"]

// Automatic Count of  last Array Element
console.log(friends[friends.length - 1]);

const firstName = "Jonas"
const jonas = [firstName, "Bob", 2023 - 1998, friends]
console.log(jonas);

// Array Length Calculation
console.log(jonas.length); // 5

const calcAge = function (birthYear) {
    return 2023 - birthYear
}

const years = [2010, 2012, 2014, 2016, 2018]

for (let i = 0; i < years.length; i++) {
    let newYear = 0;
    newYear = years[i] 
    console.log(newYear);
    console.log(calcAge(newYear));
}
