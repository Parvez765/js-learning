// Function is a piece od code that we can reuse any time any where we want
// Function Structure

function logger(name) {
    return(`My name is ${name}`);
}

// This process is called invoking the function, running the function or calling the function
const firstName = logger("Parvez");
const secondName = logger("Lima") 
console.log(firstName, secondName);

// Example Two
function fruitProcessor(apple, orange) {
    console.log(apple, orange);
    const juice = `I Want ${apple} Apple Juice and ${orange} Orange Juice`
    return juice
}

const juice = fruitProcessor(5, 3)
console.log(juice);