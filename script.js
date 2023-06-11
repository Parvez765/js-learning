// Expression is a piece of code that produce a value
// Statement is a bigger piece of code that is excuted and doesn't produce a value

// Coding Challange

let bills = 430 // 275- tip: 41.25 bills: 316.25 40- tips: 8 bills: 48 430- tip: 86 bills: 516
let tip =  bills >= 50 && bills <= 300 ? (bills * 15) / 100 : (bills * 20) / 100

let totalBill = bills + tip
console.log(tip, totalBill);

