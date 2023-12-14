// In this kata you should simply determine, whether
//  a given year is a leap year or not. 


function isLeapYear(year) {
    if(year % 100 == 0 && year % 400 != 0){
      return false;
    } else if(year % 4 == 0){
      return true;
    }else return false;
  }