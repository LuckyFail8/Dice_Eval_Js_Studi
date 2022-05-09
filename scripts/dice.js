import * as useQuery  from './useQuery';

function randomDice(nbMaxDice){;
    let diceScore = Math.floor((Math.random() * nbMaxDice) + 1);
    console.log(`dice = ${diceScore}`);
};

function throwTheDice() {
    useQuery.useRollDice.addEventListener("click", e => {
        randomDice(6);
        changeFaceDice();
    });
    useDice.addEventListener("click", e => {
        randomDice(6);
        changeFaceDice();
    });
};

function changeFaceDice() {
    if (diceScore == 1){
        displayFaceDice.src = '../images/dice-1.svg';
    } else if (diceScore == 2){
        displayFaceDice.src = '../images/dice-2.svg';
    } else if (diceScore == 3){
        displayFaceDice.src = '../images/dice-3.svg';
    } else if (diceScore == 4){
        displayFaceDice.src = '../images/dice-4.svg';
    } else if (diceScore == 5){
        displayFaceDice.src = '../images/dice-5.svg';
    } else if (diceScore == 6){
        displayFaceDice.src = '../images/dice-6.svg';
    }
};

// function changeFaceDice(diceScore){
//     displayFaceDice.src = `../images/dice-${diceScore}.svg`;
// }

throwTheDice();
console.error(error);