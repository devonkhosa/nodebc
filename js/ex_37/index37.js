let average = 6;
let studentAverage = 4;
console.log(`This student has a greater or equal average required to pass: ${studentAverage >= average}`);
if (studentAverage < average){
    var points = average - studentAverage;
}
console.log(`This student is missing ${points} points`);