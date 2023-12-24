// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols 
// that reads the same backwards as forwards, such as madam or racecar.


function isPalindrome(x) {
    
    x = x.toLowerCase();
  
    var arrX =  x.split('');
  
    var reversArrX = [];
  
    for (let i = x.length - 1; i != -1; i --){
      reversArrX.push(x[i]);
    }
  
    let count = 0;
  
    for(let i = 0; i < x.length; i++){
      if(reversArrX[i] == arrX[i]){
          count ++;
      }
    }
    return count == x.length ? true : false;
    }