// Simple, given a string of words, return the 
// length of the shortest word(s).

// String will never be empty and you do 
// not need to account for different data types.

function findShort(s){
    var arrOfS  = s.split(' ');
    let shortesLength = 10;
      for(let i = 0; i < arrOfS.length; i++){
          if(shortesLength > arrOfS[i].length){
              shortesLength = arrOfS[i].length;
          }
      }
    return shortesLength;
  }
  