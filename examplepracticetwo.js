// Challange 1

const avaAvarage = (a, b, c) => {
    const total = (a + b + c) / 3
    return total;
}

let dolpineScore = avaAvarage(44, 23, 71)
let koalaScore = avaAvarage(65, 54, 49)

console.log(dolpineScore, koalaScore);

// Challange 2

const checkWinners = (avaDolpine, avaKoala) => {
    if (avaDolpine >= 2 * avaKoala) {
        return (`Dolpines Win. ${avaDolpine} vs. ${avaKoala}`);
    } else if(avaKoala >= 2 * avaDolpine){
        return (`Koalas Win. ${avaKoala} vs. ${avaDolpine}`);
    } else {
        return (`Match Draw`);
    }
}

console.log(checkWinners(dolpineScore, koalaScore));

// Challange 3

dolpineScore = avaAvarage(85, 54, 41)
koalaScore = avaAvarage(23, 34, 27)
console.log(checkWinners(dolpineScore, koalaScore));




