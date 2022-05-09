export class Player {
    constructor(name, globalScore, currentScore){
        this.name = name;
        this.globalScore = globalScore;
        this.currentScore = currentScore;
    }
    
    initPlayer(global, current) {
        this.globalScore = global;
        this.currentScore = current;
    };
    
    current(scoreDice) {
        this.currentScore += scoreDice;
    }
    
    hold() {
        this.globalScore += this.currentScore;
        this.currentScore = 0;
    }
}
