// write a function that will select from the entire 
// string or array all the characters that appeared there

var uniqueInOrder=function(iterable){
    let resultArr = [];
    
     if (Array.isArray(iterable)){
      iterable.sort();
      for ( let i = 0; i < iterable.length; i++){
        if(iterable[i] != iterable[i+1]){
          resultArr.push(iterable[i])
        }
        }
        return resultArr;
      }else{
        for( let char of iterable){
          resultArr.push(char);
        }
        
      }  
     return uniqueInOrder(resultArr);
      
      
      
    
  }
     