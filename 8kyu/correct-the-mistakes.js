// Character recognition software is widely used to digitise printed texts. Thus the texts can be
//  edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character
//  recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:


function correct(string)
{ 
  let result = '';
	for(let char of string.split('')){
    char === '0' ? result += 'O' : char === '5' ? result += 'S' : char === '1' ? result += 'I' : result += char;
  }
  return result;
}