const greet = (firstName, lastName, callBack)=> {
console.log(`Hi, ${firstName} ${lastName}!`);
callBack();
}

const afterGreet = () => {
    console.log('This code gets executed after the greet function call');
}

greet('Devon', 'Khosa', afterGreet);
