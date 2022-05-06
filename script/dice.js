function randomDice(nbMaxDice){;
    var dice = Math.floor(Math.random() * nbMaxDice) + 1;
    console.log(`dice = ${dice}`);
};
randomDice(6);