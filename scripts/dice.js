import * as query  from './useQuery.js';
export * from './dice.js'

const useRollDice = document.querySelector('.feature__rollDice');
const displayFaceDice = document.getElementById('img-dice');
const useFaceDice = document.querySelector('.feature__dice');

let diceScore = "";

function changeFaceDice(){
    displayFaceDice.src = `./images/dice-${diceScore}.svg`;
}

function randomDice(){
    diceScore = Math.floor((Math.random() * 6) + 1);
    console.log(`dice = ${diceScore}`);
    displayFaceDice.src = `./images/dice-${diceScore}.svg`;
};

useRollDice.addEventListener("click", randomDice); 

useFaceDice.addEventListener ("click", randomDice); 
