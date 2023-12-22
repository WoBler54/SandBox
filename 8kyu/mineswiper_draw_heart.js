// need drawe a hart on the mineswiper field


function drawHart(strI,strJ){

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
// for (let i = 0; i < hightField; i++){
//     if(true){
//         document.write('*')
//     }else {
//         document.write(0);
//     }
//     for(let j = 0; j < hightField; j++){

//     }
// }
    
const rows = 15;
const columns = 15;

// Создаем пустой массив массивов
const array2D = [];

// Заполняем массив массивов нулями
for (let i = 0; i < rows; i++) {
  const row = [];
  for (let j = 0; j < columns; j++) {
    row.push(0);
  }
  array2D.push(row);
}

for(let i = 0; i < arrayOfArrays.length; i ++){
    for( let j = 0; j < arrayOfArrays[i].length; j++){
        array2D[i][arrayOfArrays[i][j]] = '*'
    }
}
for (let i = 0; i < rows; i++) {
    document.write(array2D[i].join(" ") + "<br>");
    }        


        



}
