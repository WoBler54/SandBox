// You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. \
// If the word's length is even, return the middle 2 character

function getMiddle(s)
{ 
   let answer = '';
  var splitWord = s.split('');
  if(splitWord.length % 2 === 0){
      let midleDigit =(splitWord.length / 2);
      answer += splitWord[midleDigit - 1] + splitWord[midleDigit ];
      return answer;
  }else return splitWord[(splitWord.length -1) / 2];
}