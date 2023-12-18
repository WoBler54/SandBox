String.prototype.toAlternatingCase = function () {
    let answer = '';
     for (let char of this){
      if(char === char.toUpperCase()){
        answer+= char.toLowerCase();
      }else answer += char.toUpperCase();
       
    }
    return answer;
   }