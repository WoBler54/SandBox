// Complete the square sum function so that it squares 
// each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 
function squareSum(numbers){
    let answerSum = 0;
    
    for(let num of numbers){
      answerSum += num * num
    }
    return answerSum;
  }

