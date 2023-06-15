const jonas = {
    firstName: "Jonas",
    lastName: "Alpha",
    birthYear: 1998,
    job: "Teacher",
    friends: ["Bob", "Marlie", "Nike"],
    hasDriverLicence: true
}
console.log(jonas.firstName);
console.log(jonas["firstName"]);

console.log(`${jonas.firstName} has ${jonas.friends.length} friedns and his best friend is ${jonas.friends[0]}`);