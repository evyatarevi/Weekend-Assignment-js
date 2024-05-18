import Game from './modules/Game.js';


const startApp = () => {
    const newGame = new Game();
    // arr images


    document.querySelector('.roll-btn').addEventListener('click', () => {
        newGame.rollDices();
        // set time out
        if (newGame.checkDoubleSix()) {
            newGame.roundScore = 0;
            newGame.changePlayer();
            return;
        }
        newGame.roundScore = newGame.roundScore + newGame.resultRolling;
    });

    document.querySelector('.hold-btn').addEventListener('click', () => {
        newGame.currentPlayer.score = newGame.currentPlayer.score + newGame.roundScore;
        if (newGame.checkWin()) {
            alert(`${newGame.currentPlayer.name} win!`)
            return;
        }
        newGame.roundScore = 0;
        newGame.changePlayer();
    });
    // btn hold: -> event listener
    // added rounded score to global score
    // check win
    // else:
    // change player




    // new game btn
}


startApp();