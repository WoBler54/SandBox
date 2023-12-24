// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    // your code here
    let count = 0;
    let summ = 0;
  
    while(count < array.length){
      summ = summ + array[count];
      count++;
    } 
  
    if(array.length > 0){ 
     return summ / array.length;    
    }else{    
      return 0;
      
    }
  
  
    
  }