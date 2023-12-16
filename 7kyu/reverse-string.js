function reverseWords(str) {
    let wordArray = [];
    let word = '';
    let answerArray = [];
    let reverseWord = '';
  
    var wordJ ;
    for (let char of str){    
        
        if (char == ' '){
          wordArray.push(word);
          word = '';
        }else word+= char ;
      }
      wordArray.push(word);// push last word from string
      
      for(let i = 0; i < wordArray.length; i++ ){
         wordJ = wordArray[i].split('');
        for( let j = wordJ.length - 1; j != -1; j--){
          reverseWord += wordJ[j];
        }
        reverseWord += ' ';
      }
  
      return reverseWord.trim();
      }