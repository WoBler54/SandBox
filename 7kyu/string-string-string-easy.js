// Strings, strings, strings (Easy)
// Background
// Oh no, there were some problems with your computer and now you cannot convert any data type to strings!

// Task
// The toString() method has been disabled for booleans, numbers, arrays and objects. 
//Your goal is to retrive toString() for the following data types.

// I. Booleans
// For booleans:

// true should be converted to "true"
// false should be converted to "false"


// II. Numbers
// For numbers, conversion should be as follows:

// // e.g.
// (3).toString() === "3"
// (3.14).toString() === "3.14"
// (-78).toString() === "-78"
// Math.PI.toString() === "3.141592653589793"
// III. Arrays
// For the purposes of this Kata, you will only be expected to convert arrays with numbers only into strings. 
//However, on top of fixing it, we would also like to improve it as well. We would like to keep the square brackets ([]) 
//around the "stringified" array as it would be seen in Javascript code. For example:

// // e.g.
// [].toString() === "[]"
// [1].toString() === "[1]"
// [2,4,8,17].toString() === "[2, 4, 8, 17]"
// [Math.PI, Math.E].toString() === "[3.141592653589793,2.718281828459045]"
// As you may have noticed in the examples above, when the array has more than one element, 
//some of the strings have spaces as well as commas separating each item but some strings do not. 
//For the purposes of this Kata whether there are whitespaces or not does not matter for stringified arrays - before conducting 
//the tests your input is stripped of all whitespace.

//SOLUTIONS:
function toString(imput) {
  
    // I. Booleans
    if(imput == true || false){
        if(imput) return 'true';
        else return 'false';
    }
    // II. Numbers
    if(typeof(imput) == "number"){
        let answer = '' + imput;     
        return answer;
    }
    //III. Arrays
    if(typeof(imput) == 'array')Х
        let answer = '';
        for (let char of imput){
            answer += char;
        }
        return answer;
  }