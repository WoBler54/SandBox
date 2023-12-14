// Given a string, you have to return a string in which 
// each character (case-sensitive) is repeated once.

function doubleChar(str) {
    let answer = '';
    for(let char of str){
      answer += char + char;
    }
    return answer;
    
  }