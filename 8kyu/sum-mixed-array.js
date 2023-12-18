// Given an array of integers as strings and numbers,
//  return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
  
    let answer = 0;
    for(let char of x){
      if((typeof char) === 'number' ){
          answer += char;
      }else answer += Number(char);
    }
    return answer;
  }