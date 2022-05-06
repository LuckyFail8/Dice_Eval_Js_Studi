function throwTheDice() {
    const useRollDice = document.querySelector('.feature__rollDice');
    const useDice = document.querySelector('.feature__dice');
    
    useRollDice.addEventListener("click", e => {
        randomDice(6);
    });
    useDice.addEventListener("click", e => {
        randomDice(6);
    });
};
throwTheDice();