const calcAvarage = (numberOne, numberTwo, numberThree) => {
   return (numberOne + numberTwo + numberThree) / 3
}

// const koalsAvarage = calcAvarage(64, 54, 49)
// const dolphineAvarage = calcAvarage(44, 23, 71)

// console.log(koalsAvarage, dolphineAvarage);


let dolphineScoore = calcAvarage(44, 23, 71);
let koalasScoore = calcAvarage(64, 54, 49)

const checkWinner = (avgDolphine, avgKoala) => {
    if (avgDolphine >= 2 * avgKoala) {
        return `Dolphine Win ${avgDolphine} vs ${avgKoala}`
    } else if (avgKoala >= 2 * avgDolphine) {
        return `Koala Win ${avgKoala} vs ${avgDolphine}`
    } else {
        return `No One Is Winner...`
    }
}

console.log(checkWinner(dolphineScoore, koalasScoore));

dolphineScoore = calcAvarage(85, 54, 41);
koalasScoore = calcAvarage(23, 34, 27)

console.log(checkWinner(dolphineScoore, koalasScoore));