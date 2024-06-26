import Dice from "./Dice.js";
import Player from "./Player.js";
import UI from './UI.js';

const ERROR_SCORE_MESSAGE = 'Invalid score: please enter number greater than 0';

export default class Game {
    #players;
    #rolling;
    #score;

    constructor(name1, name2) {
        this.#players = {
            player1: new Player('Evyatar', 1),
            player2: new Player('Evi', 2)
        };

        this.#players.currentPlayer = this.player1;

        this.#rolling = {
            dice1: new Dice(),
            dice2: new Dice(),
            result: null
        };

        this.#score = {
            winScore: 100,
            roundScore: 0
        };

        this.ui = new UI();
    }

    //players
    get player1() {
        return this.#players.player1;
    }

    get player2() {
        return this.#players.player2;
    }

    get currentPlayer() {
        return this.#players.currentPlayer;
    }

    set currentPlayer(player) {
        this.#players.currentPlayer = player;
    }


    //rolling
    get dice1() {
        return this.#rolling.dice1;
    }

    get dice2() {
        return this.#rolling.dice2;
    }

    get resultRolling() {
        return this.#rolling.result;
    }


    //score
    get winScore() {
        return this.#score.winScore;
    }

    get roundScore() {
        return this.#score.roundScore;
    }

    set winScore(score) {
        if (score <= 0) {
            return alert(ERROR_SCORE_MESSAGE);
        }
        this.winScore = score;
    }

    set roundScore(score) {
        this.#score.roundScore = score;
        this.ui.displayRoundedScore(score);
    }

    boldCurrentPlayer() {
        this.ui.displayCurrentPlayer(this.currentPlayer.id)
    }

    rollDices() {
        this.dice1.rollDice();
        this.dice2.rollDice();
        this.ui.displayDicesImages(this.dice1.result, this.dice2.result);
        this.#rolling.result = this.dice1.result + this.dice2.result;
    }

    checkDoubleSix() {
        if (this.resultRolling === 12) {
            return true;
        }
        return false;
    }

    changePlayer() {
        if (this.currentPlayer === this.player1) {
            this.#players.currentPlayer = this.player2;
        } else {
            this.#players.currentPlayer = this.player1;
        }
        this.boldCurrentPlayer()
    }

    checkWin() {
        if (this.currentPlayer.score >= this.winScore) {
            return true;
        }
        return false;
    }

    saveScore() {
        this.currentPlayer.score += this.roundScore;
        this.ui.updateScore(this.currentPlayer);
    }

}
