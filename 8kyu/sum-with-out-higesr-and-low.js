// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and 
// the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each 
// edge, even if there are more than one with the same value.

// Mind the input validation.

function sumArray(array) {
    if (array != null && array.length > 2) {
        array.sort((a, b) => a - b);

        let sum = 0;

        for (let i = 1; i < array.length - 1; i++) {
            sum += array[i]
        }

        return sum;
    } else return 0;
}