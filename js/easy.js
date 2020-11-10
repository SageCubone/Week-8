'use strict'

let studentA = ['A', 'AA', 19];
let studentB = ['B', 'BB', 21];
let studentC = ['C', 'CC', 24];

let students = [studentA, studentB, studentC]

console.log(`Hello, my name is ${students[1][0]} ${students[1][1]} and I am ${students[1][2]}, old`)

function allMonths() {
    let monthsName;
    let months = prompt('Choose a number 1 to 12');
    switch(months) {
        case 1:
            monthsName = 'January'
          break;
        case 2:
            monthsName = 'February'
          break;
        case 3:
            monthsName = 'March'
          break;
        case 4:
            monthsName = 'April'
          break;
        case 5:
            monthsName = 'May'
          break;
        case 6:
            monthsName = 'June'
          break;
        case 7:
            monthsName = 'July'
          break;
        case 8:
            monthsName = 'August'
          break;
        case 9:
            monthsName = 'September'
          break;
        case 10:
            monthsName = 'October'
          break;
        case 11:
            monthsName = 'November'
          break;
        case 12:
            monthsName = 'December'
          break;
        default:
          alert ('Not Valid');
    }
}

console.log(months)