const years = [1991, 2000, 2004, 2010]
const ages = []

for (let i = 0; i < years.length; i++){
    ages.push(2023 - years[i])
}

// console.log(ages);


// backaward loop
const jonas = [
    "Jonas",
    "Bob",
    2023 - 1998,
    'Teacher',
    ["One", "two", "three"]
]
 
for (let i = jonas.length - 1; i >= 0; i--){
    console.log(jonas[i]);
}