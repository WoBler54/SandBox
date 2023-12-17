
// The museum of incredible dull things wants to get rid of some exhibitions.
//  Miriam, the interior architect, 
// comes up with a plan to remove the most boring exhibitions. 
// She gives them a rating, and then removes the one with the lowest rating.
// However, just as she finished rating all exhibitions, 
// she's off to an important fair, so she asks you to write a program that 
// tells her the ratings of the items after one removed the lowest one. 
// Fair enough.

function removeSmallest(numbers) {
    let indexOfMinNumber = 0;
    for (let i = 0; i < numbers.length; i ++){
      if (numbers[i] < numbers[i+1]){
        indexOfMinNumber = i ;
      }
    }
    var answer = numbers.slice(0, indexOfMinNumber).concat(numbers.slice(indexOfMinNumber + 1));
   
    
    return answer;
  }