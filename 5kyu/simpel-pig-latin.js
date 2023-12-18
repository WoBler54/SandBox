// Move the first letter of each word to the end of it, 
// then add "ay" to the end of the word. Leave punctuation 
// marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

//SOLUTIONS:

function pigIt(str) {
    const words = str.split(/\b(\w+)\b/g);
    const pigLatinWords = words.map(word => {
        if (/^\w+$/.test(word)) {
            return word.slice(1) + word[0] + 'ay';
        }
        return word; 
    });

    return pigLatinWords.join('');
}
