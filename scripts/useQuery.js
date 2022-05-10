export * from "./useQuery.js"

// const useNewGame = document.querySelector('.feature__newGame');
// const useFaceDice = document.querySelector('.feature__dice');
// const useRollDice = document.querySelector('.feature__rollDice');
// const useHold = document.querySelector('.feature__hold');

// const displayFaceDice = document.getElementById('img-dice');
// const displayPlayer1Name = document.querySelector('.player__userName1-h2');
// const displayPlayer2Name = document.querySelector('.player__userName2-h2');
// const displayPlayer1GlobalScore = document.querySelector('.player__globalScore1-p');
// const displayPlayer2GlobalScore = document.querySelector('.player__globalScore2-p');
// const displayPlayer1CurrentScore = document.querySelector('.player__current__score1-p');
// const displayPlayer2CurrentScore = document.querySelector('.player__current__score2-p');

export default class Query {
    constructor() {
        this.useNewGame = document.querySelector('.feature__newGame');
        this.useFaceDice = document.querySelector('.feature__dice');
        this.useRollDice = document.querySelector('.feature__rollDice');
        this.useHold = document.querySelector('.feature__hold');

        this.dom = document.getElementsByTagName('body');
        this.editPlayer1 = document.querySelector('.player1')
        this.editPlayer2 = document.querySelector('.player2')
        this.displayFaceDice = document.getElementById('img-dice');
        this.displayPlayer1Name = document.querySelector('.player__userName1-h2');
        this.displayPlayer2Name = document.querySelector('.player__userName2-h2');
        this.player1GlobalScore = document.querySelector('.player__globalScore1-p');
        this.player2GlobalScore = document.querySelector('.player__globalScore2-p');
        this.player1CurrentScore = document.querySelector('.player__current__score1-p');
        this.player2CurrentScore = document.querySelector('.player__current__score2-p');
    }
    
    displayScores(player1, player2) {
        this.player1GlobalScore.textContent = player1.globalScore;
        this.player2GlobalScore.textContent = player2.globalScore;
        this.player1CurrentScore.textContent = player1.currentScore;
        this.player2CurrentScore.textContent = player2.currentScore;
    }
    
// TODO: Modifier l'orientation du dégradé en fonction du joueur ou échanger les couleurs du dégradé
    displayPlayerIsActive(player1IsActive) {
        if (player1IsActive){
            this.editPlayer1.classList.add('player1--is-active');
            this.editPlayer2.classList.remove('player2--is-active');
            this.dom.style.backgroundImage = ('-moz-linear-gradient(90deg,var(--active-color-1) 50%, var(--active-color-2) 50%');
            this.volumeBtn.style.setProperty('--btn-color', '#f8f9fa')
            this.helpBtn.style.setProperty('--btn-color', '#f8f9fa')
        } else {
            this.editPlayer2.classList.add('player2--is-active');
            this.editPlayer1.classList.remove('player1--is-active');
            this.dom.style.backgroundImage = ('-moz-linear-gradient(90deg,var(--active-color-1) 50%, var(--active-color-2) 50%');
            this.volumeBtn.style.setProperty('--btn-color', '#f8f9fa')
            this.helpBtn.style.setProperty('--btn-color', '#f8f9fa')

        }
        } 
}

// var dom = document.getElementById('mainHolder');
// dom.style.backgroundImage = '-moz-linear-gradient('
//         + orientation + ', ' + colorOne + ', ' + colorTwo + ')';