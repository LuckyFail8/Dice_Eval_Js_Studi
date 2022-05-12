export default class Player {
    constructor(name, globalScore, currentScore){
        this.name = name;
        this.globalScore = globalScore;
        this.currentScore = currentScore;
    }
    
    initPlayer(global, current) {
        this.globalScore = global;
        this.currentScore = current;
    };
    // player1GlobalScore.textContent = `${player1.globalScore}`;
    // player2GlobalScore.textContent = `${player2.globalScore}`;
    // player1CurrentScore.textContent = `${player1.currentScore}`;
    // player2CurrentScore.textContent = `${player2.currentScore}`;
    
    current(scoreDice) {
        this.currentScore += scoreDice;
    }
    // player1CurrentScore.textContent = `${player1.currentScore}`;
    // player2CurrentScore.textContent = `${player2.currentScore}`;
    
    hold() {
        this.globalScore += this.currentScore;
        this.currentScore = 0;
    }
    // player1GlobalScore.textContent = `${player1.globalScore}`;
    // player2GlobalScore.textContent = `${player2.globalScore}`;
    // player1CurrentScore.textContent = `${player1.currentScore}`;
    // player2CurrentScore.textContent = `${player2.currentScore}`;

    won() {
        if(this.globalScore >= 100) {
            return true;
        }else {
            return false;
        }
    } 
    
}
