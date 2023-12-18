// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    let answer = '';
    let idexOfString = 1;
      for(let char of s){
          let firstCharInString = true;
      for(let i = 1; i <= idexOfString; i++){
           if(firstCharInString){
              answer += char.toUpperCase();
           }else{
              answer += char.toLowerCase();
           }
           firstCharInString = false;
  
      }
      answer += '-'
      idexOfString ++;
    }
    return answer.slice(0,-1);
  }
  