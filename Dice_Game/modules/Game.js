import Dice from "./Dice.js";
import Player from "./Player.js";

const ERROR_SCORE_MESSAGE = 'Invalid score: please enter number greater than 0';

export default class Game {
    #players;
    #winScore;
    #rollScore;
    #rolling;

    constructor(name1, name2) {
        this.#players = {
            player1: new Player(name1),
            player2: new Player(name2),
            currentPlayer: this.#players.player1
        };
        this.#rolling = {
            dice1: new Dice(),
            dic2: new Dice(),
            result: null
        }
        this.#winScore = 100;
    }

    get currentPlayer() {
        return this.#players.currentPlayer;
    }

    get winScore() {
        return this.#winScore;
    }

    get rollScore() {
        return this.#rollScore;
    }

    get rolling() {
        return this.#rolling;
    }

    set currentPlayer(player) {
        return this.#players.currentPlayer = player;
    }

    set winScore(score) {
        if (score <= 0) {
            return alert(ERROR_SCORE_MESSAGE);
        }
        return this.#winScore = score;
    }

    set rollScore(score) {
        return this.#rollScore = score;
    }

    rollDices() {
        this.#rolling.dice1.rollDice;
        this.#rolling.dice2.rollDice;
        this.#rolling.result = this.#rolling.dice1.result + this.#rolling.dice2.result;
        return;
    }

    checkRolling() {
        if (newGame.rolling.result === 12) {
            if (newGame.currentPlayer === player1) {
                newGame.currentPlayer = player2;
            } else {
                newGame.currentPlayer = player1;
            }
            newGame.currentPlayer.score += newGame.rolling.result;
            newGame.rolling.result = 0;
        }
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