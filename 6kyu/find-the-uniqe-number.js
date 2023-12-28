// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique


function findUniq(arr) {

    let countTrue = 0;
    let countFalse = 0;
   
   for(let i = 0; i < arr.length; i++){
      countFalse = 0;
      countTrue = 0;
      for(let j = 0; j < arr.length; j++){
          if(countFalse > 1){
            break;
          }else {
            arr[i] != arr[j] ? countTrue ++ : countFalse ++;
          }
         
         if(countTrue == arr.length - 1) return arr[i];
   
      }
   }
   }