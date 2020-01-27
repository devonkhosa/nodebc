const myAge = 27;
const myBrothersAge = 15;
console.log(myAge + myBrothersAge);

const result = myAge + myBrothersAge;
console.log(result);
console.log(result + 2);
console.log(result - 2);
console.log(result * 2);
console.log(result / 2);

// I tried a few of the example exercises in the readings above //

const firstNumber = 1;
const secondNumber = 2;

const resultAdd = firstNumber + secondNumber;
const resultSubtract = firstNumber - secondNumber;
const resultMultiply = firstNumber * secondNumber;
const resultDivide = firstNumber / secondNumber;
const resultRemain = firstNumber % secondNumber;

let templateAdd = `I add ${firstNumber} + ${secondNumber} and the result is ${resultAdd}`;
let templateSub = `I subtract ${firstNumber} - ${secondNumber} andthe result is ${resultSubtract}`;
let templateMulti = `I multiply ${firstNumber} * ${secondNumber} and the result is ${resultMultiply}`;
let tempDivide = `I divide ${firstNumber} / ${secondNumber} and the result is ${resultDivide}`;
let tempRemain = `I find the remainder of ${firstNumber} and ${secondNumber}, leaving ${resultRemain}`;

console.log(templateAdd);
console.log(templateSub);
console.log(templateMulti);
console.log(tempDivide);
console.log(tempRemain);