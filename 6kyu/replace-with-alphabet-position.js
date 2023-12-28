// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
  
    let alphabetRegex = /[a-z]/;
    let result = '';
       for (let char of text.toLowerCase().split('')){
          
          if(alphabetRegex.test(char)){
              result += (char.charCodeAt(0) - 96 ) + ' ';
          }
       }
       return result.trim();
    } 