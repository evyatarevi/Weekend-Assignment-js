export default class Player {
    #name;
    #score;
    #id;

    constructor(name, id) {
        this.#name = name;
        this.#score = 0;
        this.#id = id;
    }

    get name() {
        return this.#name;
    }

    get score() {
        return this.#score;
    }

    get id() {
        return this.#id;
    }

    set name(name) {
        this.#name = name;
    }

    set score(score) {
        this.#score = score;
    }
}
