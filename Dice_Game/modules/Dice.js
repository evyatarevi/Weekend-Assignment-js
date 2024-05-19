export default class Dice {
    #result;

    constructor() {
        this.#result;
    }

    get result() {
        return this.#result;
    }

    rollDice() {
        this.#result = Math.floor(Math.random() * 6) + 1;
    }
}
