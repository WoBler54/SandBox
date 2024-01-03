// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
function solution(str){
    return str.length != 0 ? str.split('').reduceRight((a,b)=> a+b) : '';
  }