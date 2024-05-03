// ex2.1
const numbers = [19, 5, 42, 2, 77];
const findSumTowLowestNum = arr => {
    const sortArr = [...arr].sort((a, b) => a - b);
    return sortArr[0] + sortArr[1];
}
console.log(findSumTowLowestNum(numbers));


// ex2.2
const arr = [0, 1, 0, 1, 0];
const convertToBinary = arr => parseInt(arr.reduce((sumNumber, num) => sumNumber += num, ''), 2);
console.log(convertToBinary(arr));


// ex2.3
const findNextPerfectSquare = number => {
    const sqrNum = Math.sqrt(number);
    return sqrNum * 10 % 10 !== 0 ? -1 : (sqrNum + 1) * (sqrNum + 1)
}
console.log(findNextPerfectSquare(121));


// ex2.4
const findUniqNumber = numbersArr => {
    const sortNumbers = [...numbersArr].sort((a, b) => a - b);
    const equalNum = sortNumbers[1];
    for (let i = 0; i < sortNumbers.length; i++) {
        if (sortNumbers[i] !== equalNum) return sortNumbers[i];
    }
    return 'No uniq number found'
}
console.log(findUniqNumber([1, 1, 1, 2]));


// ex2.5
const summation = num => new Array(num).fill(1).reduce((sum, curr, i) => sum += i + 1, 0);
console.log(summation(8));


// ex2.6
const findCentury = year => year % 100 === 0 ? year / 100 : Math.floor(year / 100) + 1;

console.log(findCentury(1705));


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
}
console.log(basicMath('*', 5, 3));


// ex3.1
const nb_year = (p0, growthPercent, aug, targetPopulation) => {
    const growthFactor = growthPercent / 100;
    let currPopulation = p0, counter = 0;
    while (currPopulation < targetPopulation) {
        counter++;
        currPopulation += currPopulation * growthFactor + aug;
    }
    return `After ${counter} years the populate will be ${targetPopulation}`;
}
console.log(nb_year(1500, 5, 100, 5000));


// ex3.2
const peopleOnBus = arr => arr.reduce((currPeople, arrStation) => currPeople += arrStation[0] - arrStation[1], 0);

console.log(peopleOnBus([[5, 0], [2, 1], [3, 2], [1, 4]]));