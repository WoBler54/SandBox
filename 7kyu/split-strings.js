// Complete the solution so that it splits the string into pairs of two characters. 
// If the string contains an odd number of characters then it should replace the missing second 
// character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


function solution(str) {
    var strInArr = [];
    var pushToArr = '';
    let countInCycle = -1;
    if (str.length != 0) {
        for (let i = 0; i <= str.length; i++) {

            countInCycle++
            if (countInCycle <= 1) {
                if (str.length != i) {
                    pushToArr += str[i];
                } else {
                    pushToArr += '_';
                    strInArr.push(pushToArr);
                }
            }
            else {
                strInArr.push(pushToArr);
                pushToArr = '';
                countInCycle = -1;
                if (i != str.length) i--;
            }
        }
        return strInArr;
    } else return strInArr;



}