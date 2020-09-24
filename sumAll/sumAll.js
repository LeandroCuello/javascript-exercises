const sumAll = function(number1, number2) {

if(number1 < 0 || number2 < 0 || typeof(number1) != "number" || typeof(number2) != "number"){
    return "ERROR";
}

let biggestNumber, smallestNumber, finalNumber;
finalNumber =0;

if(number1>number2){
    biggestNumber = number1;
    smallestNumber = number2;
}else{
    biggestNumber = number2;
    smallestNumber = number1;
}

for (let i = smallestNumber; i<=biggestNumber; i++){
    finalNumber += i;
}

return finalNumber;

}

module.exports = sumAll
