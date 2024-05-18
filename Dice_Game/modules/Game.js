import Dice from "./Dice.js";
import Player from "./Player.js";
import UI from './UI.js';

const ERROR_SCORE_MESSAGE = 'Invalid score: please enter number greater than 0';

export default class Game {
    #players;
    #rolling;
    #score;
    #dicesImages1;
    #dicesImages2;

    constructor(name1, name2) {
        this.#players = {
            player1: new Player(name1),
            player2: new Player(name2)
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

    set currentPlayer(player) {
        this.#players.currentPlayer = player;
    }

    set winScore(score) {
        if (score <= 0) {
            return alert(ERROR_SCORE_MESSAGE);
        }
        this.winScore = score;
    }

    set roundScore(score) {
        this.#score.roundScore = score;
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
    }

    checkWin() {
        if (this.currentPlayer.score >= this.winScore) {
            return true;
        }
        return false;
    }

}

/*
pro:
1. current player
2. win score

method:
1. change player
2. chang win score

*/