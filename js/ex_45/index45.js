let playerName = 'Patrik Laine is lame';
let teams = 'New Jersey Devils, New York Rangers, Winnipeg Jets & Pittsburgh Penguins';
let message = 'Winnipeg is the best Canadian city, Go Winnipeg';
let slice0 = playerName.slice(0, 12);    //Patrik Laine
let slice1 = playerName.slice(12, 15);   //is
let slice2 = teams.slice(46, 50);        //jets
let slice3 = message.slice(11, 20);      //the best
let slice4 = message.slice(34, 39);      //, Go
console.log(`${slice0.toUpperCase() + slice1 + slice3} Jets player${slice4 + slice2}!!`);