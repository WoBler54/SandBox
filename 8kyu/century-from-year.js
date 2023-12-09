// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
 if (year > 99) {
        let answer = (year / 100) ;
   
        if (Number.isInteger(answer)) {
            return Math.trunc(answer);

        } else {
            return Math.trunc(answer) + 1;
        }
    } else {
        return 1;
    } 

}
