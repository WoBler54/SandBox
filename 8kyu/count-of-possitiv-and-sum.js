// Given an array of integers.

// Return an array, where the first element is the count of positives 
// numbers and the second element is sum of negative numbers. 
// 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {

    let answer = [];
    let count = 0;
    let negativCount = 0;
    
    if (Symbol.iterator in Object(input)) {

        for (let num of input) {

            if (num > 0) {
                count++;
            } else negativCount += num;

        }
        if (input.length > 0) {
            answer.push(count, negativCount)
        }
    }
    return answer;
}