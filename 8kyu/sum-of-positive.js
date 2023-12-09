
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


function positiveSum(arr) {
  
  Object.keys(arr).length;

  let summ = 0;
  let count = 0;
  while (count < arr.length) {

    if (arr[count] > 0) {
      summ += arr[count];
    }
    count++;
  }
  return summ;
}