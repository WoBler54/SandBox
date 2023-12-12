
// Note you should only return a number, the count of divisors. 
// The numbers between parentheses are shown only for you to see 
// which numbers are counted in each case.

function getDivisorsCnt(n) {
    let csheckDivisor = 1;
    let countDivisors = 0;
   
   //     while (checkDivisors != 0) {
   //         if (n % checkDivisors === 0) countDivisors++;
   //         checkDivisors--;
   //     }
   while(csheckDivisor != n){
       if(checkDivisors % 1 == 0){
           countDivisors ++;
       }else checkDivisors++;
   }
   if(n == 1) return 1;
   return countDivisors;
}