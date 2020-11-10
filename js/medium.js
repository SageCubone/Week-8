'use strict'

    let monthsName;
    let months = prompt('Choose a number 1 to 12', '1');
    switch(months) {
        case '1':
          monthsName = 'January'
          break;
        case '2':
          monthsName = 'February'
          break;
        case '3':
          monthsName = 'March'
          break;
        case '4':
          monthsName = 'April'
          break;
        case '5':
          monthsName = 'May'
          break;
        case '6':
          monthsName = 'June'
          break;
        case '7':
          monthsName = 'July'
          break;
        case '8':
          monthsName = 'August'
          break;
        case '9':
          monthsName = 'September'
          break;
        case '10':
          monthsName = 'October'
          break;
        case '11':
          monthsName = 'November'
          break;
        case '12':
          monthsName = 'December'
          break;
        default:
          monthsName = 'Not Valid'
    }

console.log(monthsName)