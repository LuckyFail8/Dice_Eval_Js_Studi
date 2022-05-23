class Player {
    constructor(globalScore, currentScore){
        this.globalScore = globalScore;
        this.currentScore = currentScore;
    }
    
    initPlayer(global, current) {
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
        return this.globalScore >= 15 ? true : false;
    }
}

let sfx = {
    throwtheDice: new Audio('./sounds/throwtheDice.mp3'),
    diceScore1: new Audio('./sounds/diceScore1.mp3'),
    hold: new Audio('./sounds/hold.mp3'),
    gameWon: new Audio('./sounds/gameWon.mp3'),
};

const useNewGame = document.querySelector('.feature__newGame');
const useFaceDice = document.querySelector('.feature__dice');
const useRollDice = document.querySelector('.feature__rollDice');
const useHold = document.querySelector('.feature__hold');
const useButtonSound = document.querySelector('.buttonAndModal__sound');

const displaySoundVolume = document.querySelector('.buttonAndModal__sound__img');
const displayFaceDice = document.getElementById('img-dice');
const displayPlayer1Name = document.querySelector('.player__userName1-h2');
const displayPlayer2Name = document.querySelector('.player__userName2-h2');
const player1GlobalScore = document.querySelector('.player__globalScore1-p');
const player2GlobalScore = document.querySelector('.player__globalScore2-p');
const player1CurrentScore = document.querySelector('.player__current__score1-p');
const player2CurrentScore = document.querySelector('.player__current__score2-p');

let player1 = new Player(0, 0);
let player2 = new Player(0, 0);
let currentPlayer = player1;
let diceScore = "";
let winner = "";
let soundMuted = false;
let media576 = window.matchMedia('(min-width: 576px)');


changeBackground();

useNewGame.addEventListener('click', newGame);
useHold.addEventListener('click', useBtnHold);
useRollDice.addEventListener('click', throwtheDice);
useFaceDice.addEventListener('click', throwtheDice);
useButtonSound.addEventListener('click', muteTheSound);
media576.addEventListener('change', changeBackground);


function changeBackground(){
    if (currentPlayer == player1 && winner == ""){
        document.body.style.backgroundImage = 'linear-gradient(180deg, var(--active-color-1) 50%, var(--active-color-2) 50%)';
        displayPlayer1Name.style.fontWeight = '300';
        displayPlayer2Name.style.fontWeight = '200';
        if (media576.matches){
            document.body.style.backgroundImage = 'linear-gradient(90deg, var(--active-color-1) 50%, var(--active-color-2) 50%)';
        };
    }else if (currentPlayer == player2 && winner == "") {
        document.body.style.backgroundImage = 'linear-gradient(180deg, var(--active-color-2) 50%, var(--active-color-1) 50%)';
        displayPlayer2Name.style.fontWeight = '300';
        displayPlayer1Name.style.fontWeight = '200';
        if (media576.matches){
            document.body.style.backgroundImage = 'linear-gradient(90deg, var(--active-color-1) 50%, var(--active-color-2) 50%)';
        };
    }else if (currentPlayer == player1 && winner == player1) {
        document.body.style.backgroundImage = 'linear-gradient(180deg, var(--color-win) 50%, var(--color-loose) 50%)';
        displayPlayer1Name.style.fontWeight = '300';
        displayPlayer2Name.style.fontWeight = '200';
        if (media576.matches){
            document.body.style.backgroundImage = 'linear-gradient(90deg, var(--color-win) 50%, var(--color-loose) 50%)';
        };
    }else if (currentPlayer == player2 && winner == player2) {
        document.body.style.backgroundImage = 'linear-gradient(180deg, var(--color-loose) 50%, var(--color-win) 50%)';
        displayPlayer2Name.style.fontWeight = '300';
        displayPlayer1Name.style.fontWeight = '200';
        if (media576.matches){
            document.body.style.backgroundImage = 'linear-gradient(90deg, var(--color-loose) 50%, var(--color-win) 50%)';
        };
    }
};


function editAllScores() {
    player1GlobalScore.textContent = `${player1.globalScore}`;
    player1CurrentScore.textContent = `${player1.currentScore}`;
    player2GlobalScore.textContent = `${player2.globalScore}`;
    player2CurrentScore.textContent = `${player2.currentScore}`;
};

function randomDice(){
    diceScore = Math.floor((Math.random() * 6) + 1);
    changeFaceDice();
    if (diceScore !==1){
        if (soundMuted == false){
            sfx.throwtheDice.play();
        }else{
            sfx.throwtheDice.pause();
        }
    }else {
        if (soundMuted == false){
            sfx.diceScore1.play();
        }else{
            sfx.diceScore1.pause();
        }
    }
};

function changeFaceDice(){
    displayFaceDice.src = `./images/dice-${diceScore}.svg`;
    displayFaceDice.setAttribute ('alt', `Dé numéro ${diceScore}`);
};

function throwtheDice(){
    randomDice();
    if (currentPlayer == player1) {
        player1.current();
        editAllScores();
        if (diceScore == 1){
            player1.currentScore = 0;
            currentPlayer = player2;
            changeBackground();
        }
    } else {
        player2.current();
        editAllScores();
        if (diceScore == 1){
            player2.currentScore = 0;
            currentPlayer = player1; 
            changeBackground();
        }
    }
};

function useBtnHold(){
    if (currentPlayer == player1) {
        player1.hold();
        editAllScores();
        if (player1.gameWon() === true) {
            winner = player1;
            currentPlayer = player1;
            if (soundMuted == false){
                sfx.gameWon.play();
            }else {
                sfx.gameWon.pause();
            };
            disableDiceAndHold();
            changeBackground();
            return;
        };
        if (soundMuted == false){
            sfx.hold.play();
        }else {
            sfx.hold.pause();
        };
        currentPlayer = player2;
        changeBackground();
    }else {
        player2.hold();
        editAllScores();
        if (player2.gameWon() === true) {
            winner = player2;
            currentPlayer = player2;
            if (soundMuted == false){
                sfx.gameWon.play();
            }else {
                sfx.gameWon.pause();
            };
            disableDiceAndHold();
            changeBackground();
            return;
        };
        if (soundMuted == false){
            sfx.hold.play();
        }else {
            sfx.hold.pause();
        };
        currentPlayer = player1;
        changeBackground();
    }
}

function newGame(){
    currentPlayer = player1;
    winner = "";
    diceScore = 1;
    changeFaceDice();
    player1.initPlayer(0, 0);
    player2.initPlayer(0, 0);
    editAllScores();
    useHold.addEventListener('click', useBtnHold);
    useRollDice.addEventListener('click', throwtheDice);
    useFaceDice.addEventListener('click', throwtheDice);
    changeBackground();
}

function disableDiceAndHold() {
    useHold.removeEventListener('click', useBtnHold);
    useRollDice.removeEventListener('click', throwtheDice);
    useFaceDice.removeEventListener('click', throwtheDice);
};
function muteTheSound(){
    if (soundMuted == false){
        soundMuted = true;
        displaySoundVolume.src = './images/volume-mute.svg';
        displaySoundVolume.setAttribute ('alt', 'sound off');
    } else {
        soundMuted = false;
        displaySoundVolume.src = './images/volume-up.svg';
        displaySoundVolume.setAttribute ('alt', 'sound on');
    };
};
