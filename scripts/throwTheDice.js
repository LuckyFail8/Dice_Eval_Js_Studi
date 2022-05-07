function throwTheDice() {
    const useRollDice = document.querySelector('.feature__rollDice');
    const useDice = document.querySelector('.feature__dice');
    
    useRollDice.addEventListener("click", e => {
        randomDice(6);
        changeFaceDice();
    });
    useDice.addEventListener("click", e => {
        randomDice(6);
        changeFaceDice();
    });
};
throwTheDice();

// TODO création d'une fonction faceDice qui affiche le dé correspondant au resultat de randomDice()

function changeFaceDice() {
    let displayFaceDice = document.querySelector('feature__dice-img');
    // displayFaceDice.src.match = './images/dice-2.svg';
    displayFaceDice.src
};

// Si scoreDice = 2 alors faceDice 
class FaceDice {
    constructor(number){
        this.number = number
    }
}
