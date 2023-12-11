// ATM machines allow 4 or 6 digit PIN codes and 
//P IN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

function validatePIN (pin) {
    let countNumberInPin = 0;
    if (pin.length == 4 || pin.length == 6 && pin != ''){
      for(let char of pin){
        if(char != ' ' && char >= 0)countNumberInPin ++;
        
      }
      
    }
    
    if(countNumberInPin == pin.length) return true ;
      else return false; 
  }