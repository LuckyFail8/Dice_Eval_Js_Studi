function changeBackground(){
    if (currentPlayer == player1 && winner == ""){        
        document.body.style.backgroundImage = 'linear-gradient(90deg, var(--active-color-1) 50%, var(--active-color-2) 50%)';
        displayPlayer1Name.style.fontWeight = '300';
        displayPlayer2Name.style.fontWeight = '200';
    }else if (currentPlayer == player2 && winner == "") {
        document.body.style.backgroundImage = 'linear-gradient(90deg, var(--active-color-1) 50%, var(--active-color-2) 50%)';
        displayPlayer2Name.style.fontWeight = '300';
        displayPlayer1Name.style.fontWeight = '200';
    }else if (currentPlayer == player1 && winner == player1) {
        document.body.style.backgroundImage = 'linear-gradient(90deg, var(--color-win) 50%, var(--color-loose) 50%)';
        displayPlayer1Name.style.fontWeight = '300';
        displayPlayer2Name.style.fontWeight = '200';

    }else if (currentPlayer == player2 && winner == player2) {
        document.body.style.backgroundImage = 'linear-gradient(90deg, var(--color-loose) 50%, var(--color-win) 50%)';
        displayPlayer2Name.style.fontWeight = '300';
        displayPlayer1Name.style.fontWeight = '200';
    }
};