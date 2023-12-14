var uniqueInOrder=function(iterable){
    let resultArr = [];
    
     if (Array.isArray(iterable)){
      
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
     