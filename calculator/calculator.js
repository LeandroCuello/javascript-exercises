function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (listOfNumbers) {
	if(listOfNumbers.length <1) return 0;
	let result = 0;
	listOfNumbers.forEach(num => {
		result += num;
	});
	return result;
}

function multiply (listOfNumbers) {
	if(listOfNumbers.length <1) return 0;
	let result = 1;
	listOfNumbers.forEach(num => {
		result *= num;
	});
	return result;
}

function power(num, exponential) {
	let result = 1;
	for(i = 0; i<exponential; i++){
		result *= num;
	}
	return result;
}

function factorial(num) {
	let result = 1;
	while(num > 1){
		result *= num;
		num--;
	}
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}