// Write a function that accepts an integer n and a 
// string s as parameters, and returns a string of s 
// repeated exactly n times.

function repeatStr (n, s) {
    let answer = '';
    for ( let i = 0; n > i;i++){
      answer+= s;
    }
    return answer;
  }