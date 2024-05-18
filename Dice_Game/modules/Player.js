export default class Player {
    #name;
    #score;

    constructor(name) {
        this.#name = name;
        this.#score = 0;
    }

    get name() {
        return this.#name;
    }

    get score() {
        return this.#score;
    }

    set name(name) {
        this.#name = name;
    }

    set score(score) {
        this.#score = score;
        document.querySelector('.player1Card div').textContent = this.score;
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