const jonas = {
    firstName: "Jonas",
    lastName: "Alpha",
    birthYear: 1998,
    job: "Teacher",
    friends: ["Bob", "Marlie", "Nike"],
    hasDriverLicence: true,
    getSummery: function () {
        return (`${this.firstName} is ${2023 - this.birthYear} years old now. He has ${this.hasDriverLicence ? 'a': "not"} driving licence`)
    }
}
console.log(jonas.firstName);
console.log(jonas["firstName"]);
console.log(jonas.getSummery());

// console.log(`${jonas.firstName} has ${jonas.friends.length} friedns and his best friend is ${jonas.friends[0]}`);