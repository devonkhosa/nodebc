function sortAscending(number1, number2, number3){
    let numberArray = [number1, number2, number3];
    numberArray.sort((a,b) => {return a-b});
    console.log(numberArray);
}

function sortDescending(number1, number2, number3){
    let numberArray = [number3, number2, number1];
    numberArray.sort((a,b) => {return b-a})
    console.log(numberArray)
}

sortAscending(10,8,25);
sortDescending(10,8,25);