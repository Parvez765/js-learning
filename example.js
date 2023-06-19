const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcAge: function () {
        const BMI = this.mass / (this.height * this.height)
        return BMI
    }
    
}

const jhon = {
    fullName: "Jhon Smith",
    mass: 92,
    height: 1.95,
    calcAge: function () {
        const BMI = this.mass / (this.height * this.height)
        return BMI
    }
}


const markBMI = mark.calcAge()
const jhonBMI = jhon.calcAge() 

if (markBMI > jhonBMI) {
    console.log(`${mark.fullName}'s BMI ${markBMI.toFixed(2)} is higher than ${jhon.fullName}'s ${jhonBMI.toFixed(2)}`);
} else {
    console.log(`${jhon.fullName}'s BMI ${jhonBMI.toFixed(2)} is higher than ${mark.fullName}'s ${markBMI.toFixed(2)}`);
}