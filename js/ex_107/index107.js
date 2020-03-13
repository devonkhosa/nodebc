function biggerNumber(firstNumber, secondNumber) {
    if(firstNumber>secondNumber) {
        console.log(`${firstNumber} is greater than ${secondNumber}`);
    } else if(secondNumber>firstNumber) {
        console.log(`${secondNumber} is greater than ${firstNumber}`);
    } else {
        console.log(`${firstNumber} is equal to ${secondNumber}`);
    }
}

biggerNumber(3, 5);
biggerNumber(6, 3);
biggerNumber(2, 2);