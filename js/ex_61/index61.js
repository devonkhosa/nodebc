//SWITCH version.

const weekdayNumber = 7;
let message = null;
switch (weekdayNumber) {
    case 1:
        message = 'Today it\'s Monday';
        break;
    case 2:
        message = 'Today it\'s Tuesday';
        break;
    case 3:
        message = 'Today it\'s Wednesday';
        break;
    case 4:
        message = 'Today it\'s Thursday';
        break;
    case 5:
        message = 'Today it\'s Friday';
        break;
    case 6:
        message = 'Today it\'s Saturday';
        break;
    case 7:
        message = 'Today it\'s Sunday';
        break;
}
console.log(message);

//next will be the IF/ELSE/IF version of the exercise.

const ifWeekdayNumber = 1;
if (ifWeekdayNumber==1) {
    console.log('Today it\'s Monday');
} else if (ifWeekdayNumber==2) {
    console.log('Today it\'s Tuesday');
} else if (ifWeekdayNumber==3) {
    console.log('Today it\'s Wednesday');
} else if (ifWeekdayNumber==4) {
    console.log('Today it\'s Thursday');
} else if (ifWeekdayNumber==5) {
    console.log('Today it\'s Friday');
} else if (ifWeekdayNumber==6) {
    console.log('Today it\'s Saturday');
} else if (ifWeekdayNumber==7) {
    console.log('Today it\'s Sunday');
} else {
    console.log('Sorry, please enter a number between 1-7 and try again');
}