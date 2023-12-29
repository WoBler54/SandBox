// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){

    const xArr = x.split(' ');
    
    let scorWord = 0;
    let bestScorWord = 0;
    let indexOfBestScor
    
    for (let i = 0; i < xArr.length; i++){
      scorWord = 0;
      for(let j = 0; j < xArr[i].length; j++){
       
        scorWord +=  (xArr[i][j].charCodeAt(0) - 96 ) ;
    
      }
      if(scorWord > bestScorWord){
          bestScorWord = scorWord;
          indexOfBestScor = i;
       } 
      
    }
    return xArr[indexOfBestScor];
    }