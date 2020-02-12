const text = 'game of thrones';
let firstChar = text.charAt(0);
let secondChar = text.charAt(5);
let thirdChar = text.charAt(8);
let resultName = firstChar.concat(secondChar + thirdChar);
console.log(`The final result is: ${resultName.toUpperCase()}`);