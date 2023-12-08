// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    let count = 0;
    let numberForArrayCount = n;
    var arrayAnswer = [ ];
    while(count < n ){
      
      arrayAnswer[count] = numberForArrayCount;
      count ++;
      numberForArrayCount --;
    }
    return arrayAnswer;
  };