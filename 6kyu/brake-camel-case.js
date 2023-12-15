// Complete the solution so that the function 
// will break up camel casing, using a space between words.

function solution(string) {
    const isUpperCase = (string) => /^[A-Z]*$/.test(string)
    let answer = '';
    for (let char of string){
      if(isUpperCase(char)){
        answer += ' ' + char;
      }else answer += char;
    }
  return answer;
}