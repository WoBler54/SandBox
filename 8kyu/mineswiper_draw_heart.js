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
    // make array of num with courdinate bombs
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
// make a field of 0

for (let i = 0; i < rows; i++) {
  const row = [];
  for (let j = 0; j < columns; j++) {
    row.push(0);
  }
  array2D.push(row);
}
// push bombs in field
for(let i = 0; i < arrayOfArrays.length; i ++){
    for( let j = 0; j < arrayOfArrays[i].length ; j++){
        array2D[i][arrayOfArrays[i][j]] = '*'
    }
}

array2D[0][0] = 0; // it`s shit solutions but i`m dont understund why 3 first symbol in rows have 1
array2D[1][0] = 0;
array2D[2][0] = 0;
    
// make flags how much bombs 
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

// imput for draw Heart
// document.write(drawHeart('0 0 0 4 5 6 7 11 12 13 14 3 8 10 15 2 9 16 2 16 2 16 2 16 2 16 3 15 4 14 5 13 6 12 7 11 8 10 9','2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19'));