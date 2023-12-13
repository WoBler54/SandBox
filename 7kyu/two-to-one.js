// Take 2 strings s1 and s2 including only letters from a to z.Return a new sorted string, 
//the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

//     Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// I'll try to concatenate s1 s2, sort them alphabetically 
//and then cycle through them to remove duplicates

//SOLUTIONS:
function longest(s1, s2) { 
    let concatenate = s1 + s2;
    let sortByAlphabet = concatenate.split('').sort().join('');
    let arrForChar = [];
    let answer = '';
   
    // I haven't figured out how to access the next character in the loop
    for(let char of sortByAlphabet){
     arrForChar.push(char);
    }
     let count = 0;
     while(count < arrForChar.length){
         if(arrForChar[count] != arrForChar[count+1]){
             answer += arrForChar[count]
         }
         count++;
     }
    return answer;
   }