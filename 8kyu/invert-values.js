// Given a set of numbers, return the additive inverse of each. 
// Each positive becomes negatives, and the negatives become positives.

function invert(array) {
    let answer = [];
     for (let num of array){
       answer.push(- num);
     }
    return answer;
  }