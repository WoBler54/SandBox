// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...


function SeriesSum(n)
{
  let sum = 0;
  let step = 1;
  for(let i = 0; i < n; i++){
    
    sum += 1 / step;
    step += 3;
  }
  
 return (Math.round(sum * 100) / 100).toFixed(2);
}