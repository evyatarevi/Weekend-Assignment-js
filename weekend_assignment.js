// ex1.1
const checkBool = (bool) => (bool ? 'Yes' : 'No');

// ex2.1
const numbers = [19, 5, 42, 2, 77];
const findSumTowLowestNum = (arr) => {
    const sortArr = [...arr].sort((a, b) => a - b);
    return sortArr[0] + sortArr[1];
};
// console.log(findSumTowLowestNum(numbers));

// ex2.2
const arr = [1, 1, 0, 1, 1];
const convertToBinary = (arr) =>
    parseInt(
        arr.reduce((sumNumber, num) => (sumNumber += num), ''),
        2,
    );

// CR - The binary conversion does not consider the position of each digit in the binary string.
// The correct method to convert an array of binary digits to a number is demonstrated below.
// * I not understand why my func is wrong, is work like Ori func.
const convertToBinary2 = (arr) => parseInt(arr.join(''), 2);
// console.log(convertToBinary(arr));
// console.log(convertToBinary2(arr));

// ex2.3
const findNextPerfectSquare = (number) => {
    const sqrNum = Math.sqrt(number);
    return (sqrNum * 10) % 10 !== 0 ? -1 : (sqrNum + 1) * (sqrNum + 1);
};
// console.log(findNextPerfectSquare(121));

// ex2.4
const findUniqNumber = (numbersArr) => {
    const sortNumbers = [...numbersArr].sort((a, b) => a - b);
    const equalNum = sortNumbers[1];
    for (let i = 0; i < sortNumbers.length; i++) {
        if (sortNumbers[i] !== equalNum) return sortNumbers[i];
    }
    return 'No uniq number found';
};
// console.log(findUniqNumber([1, 1, 1, 2]));

// ex2.5
const summation = (num) => new Array(num).fill(1).reduce((sum, curr, i) => (sum += i + 1), 0);
// console.log(summation(8));

// ex2.6
const findCentury = (year) => (year % 100 === 0 ? year / 100 : Math.floor(year / 100) + 1);

// console.log(findCentury(1705));

// ex2.7
const basicMath = (operator, num1, num2) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        default:
            return num1 / num2;
    }
    // option b:
    // return eval(num1+operator+num2);
};
// console.log(basicMath('*', 5, 3));

// ex3.1
const nb_year = (p0, growthPercent, aug, targetPopulation) => {
    const growthFactor = growthPercent / 100;
    let currPopulation = p0,
        counter = 0;
    while (currPopulation < targetPopulation) {
        counter++;
        currPopulation += currPopulation * growthFactor + aug;
    }
    return counter;
};
// console.log(nb_year(1500, 5, 100, 5000));

// ex3.2
const peopleOnBus = (arr) => arr.reduce((currPeople, arrStation) => (currPeople += arrStation[0] - arrStation[1]), 0);

// console.log(peopleOnBus([[5, 0], [2, 1], [3, 2], [1, 4]]));

// ex4.1
// CR - The implementation of the Fibonacci sequence is incorrect and overly complex.
const fibonacci = (n) => {
    let n1 = 0;
    let n2 = 1;
    for (let i = 0; i < n - 2; i++) {
        i % 2 === 0 ? (n1 = n1 + n2) : (n2 = n1 + n2);
    }
    return n1 > n2 ? n1 : n2;
};
// console.log(fibonacci(9));

// CR - correct function:
// function fibonacci(n) {
// 	if (n <= 1) return n;
// 	let fib = [0, 1];
// 	for (let i = 2; i <= n; i++) {
// 		fib[i] = fib[i - 1] + fib[i - 2];
// 	}
// 	return fib[n];
// }

// ex5.1
const trimStr = (str) => str.slice(1, str.length - 1);

// ex5.2
const repeatStr = (num, str) => str.repeat(num);

// ex5.3
const toCamelCase = (str) => {
    let indexDash = str.indexOf('-');
    while (indexDash !== -1) {
        str = str.slice(0, indexDash) + str.slice(indexDash + 1, indexDash + 2).toLocaleUpperCase() + str.slice(indexDash + 2);
        indexDash = str.indexOf('-') !== -1 ? str.indexOf('-') : str.indexOf('_');
    }
    return str;
};

// CR - The current approach for converting to camelCase does not handle underscores and can be inefficient due to repeated string operations.
// A more efficient and cleaner way to handle both dashes and underscores is shown below.
const toCamelCase2 = (str) => {
    return str.replace(/[-_]+(.)/g, (_, chr) => chr.toUpperCase());
};

console.log(toCamelCase2('the_stealth_warrior'));