export default class UI {
    #dicesImages1;
    #dicesImages2;
    #roundedScore;
    #player1;
    #player2;

    constructor() {
        this.#dicesImages1 = document.querySelectorAll('.dices1 img');
        this.#dicesImages2 = document.querySelectorAll('.dices2 img');
        this.#roundedScore = document.querySelector('.roundedScore');
        this.#player1 = document.querySelector('.player1');
        this.#player2 = document.querySelector('.player2');
    }

    displayDicesImages(dice1, dice2) {
        this.#dicesImages1.forEach((element) => {
            element.classList.remove('visible');
        });
        this.#dicesImages2.forEach((element) => {
            element.classList.remove('visible');
        });
        this.#dicesImages1[dice1 - 1].classList.add('visible');
        this.#dicesImages2[dice2 - 1].classList.add('visible');
    }

    displayRoundedScore(score) {
        this.#roundedScore.textContent = score;
    }

    displayCurrentPlayer(id) {
        if (id === 1) {
            this.#player1.classList.add('current-player');
            this.#player2.classList.remove('current-player');
            return;
        }
        this.#player2.classList.add('current-player');
        this.#player1.classList.remove('current-player');

    }

}