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
        // document.querySelector('.player1 div').textContent = this.score;
    }
}

/*
Player:
name
1. rollScore.
2. roundScore.
3. score.

method:
1. roll dices.
2. add score round score.
3. add score to global score. -> maby same func of section 2.
4. clear score.
5. hold
6. check win. 


*/