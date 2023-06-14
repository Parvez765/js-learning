// Function is a piece od code that we can reuse any time any where we want
// Function Structure

function logger(name) {
    return(`My name is ${name}`);
}

// This process is called invoking the function, running the function or calling the function
const firstName = logger("Parvez");
const secondName = logger("Lima") 
// console.log(firstName, secondName);

// Example Two
// function fruitProcessor(apple, orange) {
//     // console.log(apple, orange);
//     const juice = `I Want ${apple} Apple Juice and ${orange} Orange Juice`
//     return juice
// }

// const juice = fruitProcessor(5, 3)
// console.log(juice);

// Function Decleration And Expression

// Function Decleration

// We can initail Function Decleration before calling but can't do the same with function expression
function calcAge1(birthYear) {
    return 2023 - birthYear
}
// console.log(calcAge1(1998));


// Function Expression
const calcAge2 = function (birthYear) {
    return 2023 - birthYear
}
// console.log(calcAge2(2000));

// Arrow Function
const birthYear = (age) => {
    return 2023 - age
}

// console.log(birthYear(1998));

// Calling One Function From Another Function
function cutFruitPiece(fruit) {
    return fruit * 4
}


function fruitProcessor(apple, orange) {
    // console.log(apple, orange);
    const applePiece = cutFruitPiece(apple);
    const orangePiece = cutFruitPiece(orange)

    const juice = `I Want ${applePiece} Apple Juice and ${orangePiece} Orange Juice`
    return juice
}
console.log(fruitProcessor(4, 5));

