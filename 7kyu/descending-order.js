
// Your task is to make a function that can take any non - negative
// integer as an argument and return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
    let arr = [];
    let nStr = n + '';
    var answer = '';
    for(let char of nStr){
      arr.push(Number(char));
    }
    let sortedArr = arr.sort(function(a, b){
      return b-a;
  })
    for(let i = 0; i <= sortedArr.length - 1; i++){
      answer+= sortedArr[i];
    }
    return Number(answer);
  }