console.log("I am building a calculator.");

let numArray = [];
let funcArray = [];

//Display sequence in Output
//$('header').text("Stored Numbers: " + numArray + "\n" + "Stored Functions: " + funcArray);


//Click on number + store value

$('.square').on('click', (e) => {
	let $targetNumber = $(e.currentTarget).text();
	numArray.push($targetNumber);
	//$('header').text("Stored Numbers: " + numArray + "\n" + "Stored Functions: " + funcArray);
	console.log('clicked number ' + $targetNumber);
	console.log(numArray);
})


//Click on function + store value
$('.functions').on('click', (e) => {
	let $targetFunction = $(e.currentTarget).text();
	funcArray.push($targetFunction);
	//$('header').text("Stored Numbers: " + numArray + "\n" + "Stored Functions: " + funcArray);
	console.log('clicked function ' + $targetFunction)
	console.log(funcArray);
})

//Make equals button run top level math function
$('.equals').on('click', (e) => {
	math();
})

//Make clear button clear the arrays
$('.clear').on('click', (e) => {
	console.log('clear clicked');
	numArray.length = 0;
	console.log(numArray);
	funcArray.length = 0;
	console.log(funcArray);
	$('header').text("OUTPUT");
})

//top level math function

const math = () => {
		let numOne = numArray[numArray.length - 2];
		console.log("First Number: " + numOne);
		let numTwo = numArray[numArray.length - 1];
		console.log("Second Number: " + numTwo);
		let funcOne = funcArray[funcArray.length - 1];
		console.log("First Function: " + funcOne);
		if(funcOne === 'x'){
			multiply(numOne, numTwo);
		} else if (funcOne === '/'){
			divide(numOne, numTwo);
		} else if (funcOne === '+'){
			add(numOne, numTwo);
		} else if (funcOne === '-'){
			subtract(numOne, numTwo);
		} else
			console.log('Error');
};

//sub math functions
const multiply = (numOne, numTwo) => {
	let productMe = numOne * numTwo;
	$('header').text(numOne + " x " + numTwo + " = " + productMe);
}

const divide = (numOne, numTwo) => {
	let divideMe = numOne / numTwo;
	$('header').text(numOne + " / " + numTwo + " = " + divideMe);
}

const add = (numOne, numTwo) => {
	let addMe = numOne + numTwo;
	$('header').text(numOne + " + " + numTwo + " = " + addMe);
}

const subtract = (numOne, numTwo) => {
	let subtractMe = numOne - numTwo;
	$('header').text(numOne + " - " + numTwo + " = " + subtractMe);
}

















