// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.
function disemvowel(str) {
    let isVowel = false;
    let answer = ''
    let vowels = ['A', 'E', 'I', 'O', 'U'];
    var arrStr = str.split('');
 
       for(let i = 0; i < arrStr.length; i++){
          for(let j = 0; j < vowels.length; j++){
            if(arrStr[i].toUpperCase() === vowels[j]){
                isVowel = true;
                break;
            }else isVowel = false;
 
          }
          if(!isVowel) answer += arrStr[i] ;
       }
 
 return answer;
 }