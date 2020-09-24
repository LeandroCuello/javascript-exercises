const removeFromArray = function(numberArray, ...eliminateList) {

for(let i = 0; i < eliminateList.length; i++){
    numberArray = eliminateRepeted(numberArray, eliminateList[i]);
}
return numberArray;
}

function eliminateRepeted(string1, subjectToElimite){
    for(i=0; i<string1.length; i++){
        if(string1[i] === subjectToElimite){
            string1.splice(i, 1);
        }
    }
    return string1;
}

module.exports = removeFromArray
