const number = require('./numbers.js');
const Logger = require('logplease');

function evenOdd(n) {
const even = Logger.create(`${n} is an even number.`);
const odd = Logger.create(`${n} is an odd number.`);

if (number(n) == true) {
    even.info(number(n));
} else {
    odd.warn(number(n));
}
}

evenOdd(2);
evenOdd(3);
evenOdd(101);
evenOdd(201);
evenOdd(202);
evenOdd(100);