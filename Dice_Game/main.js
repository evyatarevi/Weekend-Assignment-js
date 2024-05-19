import Game from './modules/Game.js';


const startApp = () => {
    const newGame = new Game();
    newGame.boldCurrentPlayer();

    document.querySelector('.roll-btn').addEventListener('click', () => {
        newGame.rollDices();
        if (newGame.checkDoubleSix()) {
            newGame.roundScore = 0;
            newGame.changePlayer();
            return;
        }
        newGame.roundScore += newGame.resultRolling;
    });

    document.querySelector('.hold-btn').addEventListener('click', () => {
        newGame.saveScore();
        if (newGame.checkWin()) {
            alert(`${newGame.currentPlayer.name} win!`)
            return;
        }
        newGame.roundScore = 0;
        newGame.changePlayer();
    });


    // new game btn
}


startApp();