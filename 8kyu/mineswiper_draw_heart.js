// need drawe a hart on the mineswiper field


function drawHeart(strI,strJ){

    var arrIStr = strI.split(' ');
    var arrJStr = strJ.split(' ');
    var arrI = arrIStr.map(function(nubmer){
        return Number(nubmer);
    });
    var arrJ = arrJStr.map(function(nubmer){
        return Number(nubmer);
    });
    hightField = arrJ.length;
    widhtField = hightField;

var arrayOfArrays = [];
let transportArray = [];

for ( let i = 0; i < arrI.length; i++ ){
        if(arrI[i] < arrI[i + 1]){
            transportArray.push(arrI[i]);            
        }else {
            transportArray.push(arrI[i]);
            arrayOfArrays.push(transportArray);
            transportArray = [];
        }
        
    } 
    arrayOfArrays.push(transportArray);

    
const rows = 19;
const columns = 19;


const array2D = [];


for (let i = 0; i < rows; i++) {
  const row = [];
  for (let j = 0; j < columns; j++) {
    row.push(0);
  }
  array2D.push(row);
}

for(let i = 0; i < arrayOfArrays.length; i ++){
    for( let j = 0; j < arrayOfArrays[i].length ; j++){
        array2D[i][arrayOfArrays[i][j]] = '*'
    }
}

array2D[0][0] = 0;
array2D[1][0] = 0;
array2D[2][0] = 0;
    

for(let i = 0; i < array2D.length; i++){
    for(let j = 0; j < array2D.length; j++){
        if(array2D[i][j] == '*'){
           if(array2D[i][j - 1] != '*') array2D[i][j - 1] += 1;
           if(array2D[i + 1][j] != '*') array2D[i + 1][j] += 1;
           if(array2D[i - 1][j] != '*') array2D[i - 1][j] += 1;
            if(array2D[i][j + 1] != '*')array2D[i][j + 1] += 1;
            if(array2D[i - 1][j + 1] != '*') array2D[i - 1][j + 1] += 1;
            if(array2D[i + 1][j + 1] != '*') array2D[i + 1][j + 1] += 1;
            if(array2D[i - 1][j - 1] != '*') array2D[i - 1][j - 1] += 1;
            if(array2D[i + 1][j - 1] != '*') array2D[i + 1][j - 1] += 1;
         
        }
    }
}
        
for (let i = 0; i < rows; i++) {
    document.write(array2D[i].join(" ") + "<br>");
    }    


}
