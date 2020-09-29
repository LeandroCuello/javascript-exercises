const fibonacci = function(inputNumber) {

    inputNumber = +inputNumber;

    if(Number.isNaN(inputNumber) || inputNumber < 0){
        return "OOPS";
    }

    let fibonacciNumber = 1;
    let lastNumber =0;
    let tmp =0;
    for(let i = 1; i < inputNumber; i++){
        temp = fibonacciNumber;
        fibonacciNumber += lastNumber;
        lastNumber = temp;
    }
    return fibonacciNumber;
}

module.exports = fibonacci
