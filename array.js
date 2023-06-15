// We Can Create Array in Two Ways

// Manuall Way
const friends = ["Peter", "Jhon", "Jashim"]

// Using NEW KeyWord
const years = new Array(1991, 1998, 2000, 2023)
console.log(friends[0]);

// Array Methods
friends.push("Bob"),
friends.unshift("Marlie")
friends.pop()
friends.shift()
console.log(friends);

console.log(friends.indexOf("Jhon")); // It Return 1 Or -1

// includes is modern method of JS ES6
console.log(friends.includes("Jhon")); // return true or false


// Example
const calcTip = (value) => {
    if (value >= 50 && value <= 300) {
            return value * (50/ 100)
    } else {
        return value * (20 / 100)
        }
}

// console.log(calcTip(100));

const bills = [125, 555, 44]

const tip = []
const totalBill = []
bills.map(bill => {
    const billValue = calcTip(bill)
    tip.push(billValue)
    totalBill.push(bill + billValue)
})
console.log(tip);
console.log(totalBill);





