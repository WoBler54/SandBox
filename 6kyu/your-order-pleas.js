// Your task is to sort a given string. Each word in the string will contain a single number.
//  This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the 
// input String will only contain valid consecutive numbers.

function order(words){
    let wordArray = [];
    let word = '';
    
    
    for (let char of words){    
      
      if (char == ' '){
        wordArray.push(word);
        word = '';
      }else word+= char ;
    }
    wordArray.push(word);// push last word from string

   var answer = wordArray.slice(0);
    for(let i = 0; i < wordArray.length; i++){
      for( let char of wordArray[i]){
        if(!isNaN(char)){
          answer.splice(char -1,1,wordArray[i]);
        }
      }
    }
    const answerString = answer.join(' ');
    return answerString;
  }