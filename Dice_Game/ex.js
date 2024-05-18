class Ex {
    #ex;

    constructor() {
        this.#ex = 1;
    }

    get ex() {
        return this.#ex;
    }

    set ex(e) {
        this.#ex = e;
    }

    // duplicate(num) {
    //     this.#ex = num;
    // }
    // df() {
    //     return this.#ex = 7;
    // }
}

const ex1 = new Ex();
ex1.ex = 20;
// ex1.duplicate(5);
// console.log(ex1.df());
console.log(ex1.ex);