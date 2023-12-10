// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


//SOLUTIONS:


 
function getCount(str) {
    let vowelCount = 0;
    var arrVowelsLetters = ['a', 'e', 'i', 'o', 'u'];    

    for (let char of str) {
        for (let i = 0; arrVowelsLetters.length > i; i++) {
            if (char === arrVowelsLetters[i]) {
                vowelCount++;
            }
        }
    }
    return vowelCount;
  }