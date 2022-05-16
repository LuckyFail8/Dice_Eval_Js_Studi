const useNewGame = document.querySelector('.feature__newGame');
const useFaceDice = document.querySelector('.feature__dice');
const useRollDice = document.querySelector('.feature__rollDice');
const useHold = document.querySelector('.feature__hold');

const body = document.getElementsByTagName('body');
const editPlayer1 = document.querySelector('.player1')
const editPlayer2 = document.querySelector('.player2')
const displayFaceDice = document.getElementById('img-dice');
const displayPlayer1Name = document.querySelector('.player__userName1-h2');
const displayPlayer2Name = document.querySelector('.player__userName2-h2');
const player1GlobalScore = document.querySelector('.player__globalScore1-p');
const player2GlobalScore = document.querySelector('.player__globalScore2-p');
const player1CurrentScore = document.querySelector('.player__current__score1-p');
const player2CurrentScore = document.querySelector('.player__current__score2-p');




class Player {
    constructor(name, globalScore, currentScore){
        this.name = name;
        this.globalScore = globalScore;
        this.currentScore = currentScore;
    }
    
    initPlayer(name, global, current) {
        this.name = name
        this.globalScore = global;
        this.currentScore = current;
    };
    
    current() {
        if (diceScore !== 1){
            this.currentScore += diceScore;
        } else {
            this.currentScore = 0;
        };
    }
    
    hold() {
        this.globalScore += this.currentScore;
        this.currentScore = 0;
    }
    
    gameWon(){
        return this.globalScore >= 10 ? true : false;
    }
}


function newGame(){
    player1.initPlayer(player1.name, 0, 0);
    player2.initPlayer(player2.name, 0, 0);
    displayPlayer1Name.textContent = `${player1.name}`;
    displayPlayer2Name.textContent = `${player2.name}`;
    player1GlobalScore.textContent = `${player1.globalScore}`;
    player1CurrentScore.textContent = `${player1.currentScore}`;
    player2GlobalScore.textContent = `${player2.globalScore}`;
    player2CurrentScore.textContent = `${player2.currentScore}`;
    currentPlayer = player1;
}    

function disableDiceAndHold() {
    useFaceDice.removeEventListener('click', event);
    useRollDice.removeEventListener('click', event);
    useHold.removeEventListener('click', event);
};

function changeFaceDice(){
    displayFaceDice.src = `./images/dice-${diceScore}.svg`;
    displayFaceDice.setAttribute ('alt', `Dé numéro ${diceScore}`);
};

function randomDice(){
    diceScore = Math.floor((Math.random() * 6) + 1);
    changeFaceDice();
    console.log(`dice = ${diceScore}`);
};
function changeBackground() {
    switch (currentPlayer) {
        case player1 : 
        document.body.style.backgroundColor = 'linear-gradient(90deg,var(--active-color-1) 50%, var(--active-color-2) 50%)';
    }
};


let player1 = new Player('Jb', 0, 0);
let player2 = new Player('Charles', 0, 0);
let currentPlayer = player1;
let diceScore = "";
let victory = false;


useNewGame.addEventListener('click', newGame);



[useRollDice, useFaceDice].forEach(item => {
    item.addEventListener('click', event => {
        console.log(currentPlayer);
        randomDice();
        if (currentPlayer == player1) {
            player1.current();
            player1CurrentScore.textContent = `${player1.currentScore}`;
            console.log(`currentScore de ${currentPlayer.name} = ${player1.currentScore}`);
            if (diceScore == 1){
                player1.currentScore = 0;
                currentPlayer = player2; 
                console.log(currentPlayer);
            }
        } else {
            player2.current();
            player2CurrentScore.textContent = `${player2.currentScore}`;
            console.log(`currentScore de ${currentPlayer.name} = ${currentPlayer.currentScore}`);
            if (diceScore == 1){
                player2.currentScore = 0;
                currentPlayer = player1; 
                console.log(currentPlayer);
            }
        }
    });
});

useHold.addEventListener('click', event => {
    console.log(`currentPlayer : ${currentPlayer.name}, player1 : ${player1.name}, player2 : ${player2.name}`);
    if (currentPlayer == player1) {
        player1.hold();
        player1GlobalScore.textContent = `${player1.globalScore}`;
        player1CurrentScore.textContent = `${player1.currentScore}`;
        if (player1.gameWon() === true) {
            alert(`${player1.name} à gagné`);
            return
        };
        currentPlayer = player2;
        console.log(`Hold : \n currentPlayer : ${currentPlayer.name}, player1 : ${player1.name}, player2 : ${player2.name}`);
    
    }else {
        player2.hold();
        player2GlobalScore.textContent = `${player2.globalScore}`;
        player2CurrentScore.textContent = `${player2.currentScore}`;
        if (player2.gameWon() === true) {
            alert(`${player2.name} à gagné`);
            return
        };
        currentPlayer = player1;
        console.log(`Hold : \n currentPlayer : ${currentPlayer.name}, player1 : ${player1.name}, player2 : ${player2.name}`);
        
    }
});
