import Player  from './scripts/player.js'
import * as dice from './scripts/dice.js'
import Query from './scripts/useQuery.js';

const player1 = new Player();
const player2 = new Player();
const query = new Query();
let player1IsActive = true;

throwTheDice() => {
    
}












const newGame = () => {
    player1Turn = true
    player1.initPlayer(0, 0)
    player2.initPlayer(0, 0)
    query.displayScores(player1, player2)
    displayFaceDice.src = `./images/dice-1.svg`;
    query.updateTurnView(player1Turn)
    // rollDiceBtn.classList.remove(`disabled`)
    // diceFace.classList.remove(`disabled`)
    // holdBtn.classList.remove(`disabled`)
    // for (let i = 1; i < 3; i++) {
    //     board.classList.remove(`player${i}-victory`)
    // }
}

console.log(player1.currentScore)


// TODO: Récupérer les noms des player 1 et 2

// TODO: Afficher les resultat grâce au query 
// TODO: Changer le background en fonction de la class --is-active
// TODO: Changer le background en fonction du gagnant et du perdant

// TODO: Effectuer les exports et import


// TODO: vérifier l'incrémentation de diceScore à currentScore
// TODO: vérifier l'incrémentation de currentScore à globalScore


