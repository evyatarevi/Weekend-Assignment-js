export default class UI {
    #dicesImages1;
    #dicesImages2;

    constructor() {
        this.#dicesImages1 = document.querySelectorAll('.dices1 img');
        this.#dicesImages2 = document.querySelectorAll('.dices2 img');
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
}