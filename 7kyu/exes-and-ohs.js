// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. 
// The string can contain any char.

function XO(str) {
   
    let xCount = 0;
    let oCount = 0;
    for(let char of str.toLowerCase()) {

      (char === 'x') ? xCount++ : (char === 'o') ? oCount++ : null;

    }
   return xCount === oCount ? true : false;
   }