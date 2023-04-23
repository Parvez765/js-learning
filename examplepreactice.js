let avarageOfDolphine = ((96 + 108 + 89) / 3)

// console.log(avarageOfDolphine);

let avarageOfKoala = ((89 + 91 + 110) / 3)
// console.log(avarageOfKoala);

// Comparing Avarage
if (avarageOfDolphine > avarageOfKoala) {
    // console.log("Winner is Dolphine");
} else if (avarageOfDolphine < avarageOfKoala) {
    // console.log("Wineer is Koala");
} else {
    // console.log("The Match is Draw");
}

// Example 2

let bill = 275;
let tip = (bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2)
 
console.log(tip);

console.log(`The bill is ${bill} and total is ${bill + tip}`);