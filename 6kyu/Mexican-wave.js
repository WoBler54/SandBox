// 1.  The input string will always be lower case but maybe empty.

// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

function wave(str){
    let arr = str.toLowerCase().split('');
    let word = '';
    let result = [];
   for(let i = 0; i < arr.length; i++){
    word = '';
     
    for(let j = 0; j < arr.length; j++){
       if(arr[i] == ' ') break;
       i === j ? word += arr[i].toUpperCase() : word += arr[j]
 
    }
    
   if(arr[i] != ' ')  result.push(word);
   }
   return result;
 }