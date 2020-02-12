let message = "3.14 it's a great number but 42 it's the answe to life."
let pi = parseFloat(message);
let answerToLife = parseInt(message.slice(28, 31));
let result = pi + answerToLife;
console.log(`Result: ${result}`);
console.log(`${result.toString()} is the result of adding pi and answerToLife`);