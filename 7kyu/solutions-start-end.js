function solution(str, ending) {
    let c = str.length ;
    let correctCount = 0;
    for (let i = 0; i < ending.length; i++) {

        if (ending[i] === str[c - ending.length]) {
            correctCount++;
            c++;
        }
        
    }
    if (correctCount === ending.length) return true;
        else return false;
}