// Convert number to reversed array of digits
// Given a random non-negative number, you have to 
// return the digits of this number within an array in reverse order.

function digitize(n) {
 
    let arr = String(n).slice('');
   
    let answer = [];
   
    for( let i = arr.length - 1; i >= 0; i--){
       answer.push(Number(arr[i]));
    }
   
    return answer;
   }