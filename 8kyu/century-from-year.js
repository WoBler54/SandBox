// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
    if(year > 999 ){
      if(year[2] === 0 && year[3] === 0){
        return year[0,1];
      }
    }
    return;
  }
  console.log(century(1900));