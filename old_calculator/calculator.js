console.log("I am building a calculator.");

let numArray = []; //Array for user selected numbers
let funcArray = []; //Array for user selected functions
let num2Array = []; //Array for computing more than two numbers

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
	// funcArray.push($targetFunction);
	// $('header').text("Stored Numbers: " + numArray + "\n" + "Stored Functions: " + funcArray);
	console.log('clicked function ' + $targetFunction)
	console.log(funcArray);
})

//Make equals button run mid level math function
$('.equals').on('click', (e) => {
	math();
	console.log(num2Array); 
	console.log(numArray);
	console.log(funcArray);
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

// const compute = () => {
// 	for(i = 0; i < numArray.length; i++){
// 		math();
// 	}	
// }

//mid level math function to compute last two numbers in array + last function in array

const math = () => {
		//Grab the second to last number in the array
		let numOne = numArray[numArray.length - 2];
		console.log("First Number: " + numOne);
		//Grab the last number in the array
		let numTwo = numArray[numArray.length - 1];
		console.log("Second Number: " + numTwo);
		// Grab the last function in the array
		let funcOne = funcArray[funcArray.length - 1];
		console.log("First Function: " + funcOne);
		// Calculate based on last two numbers + last function
		if(funcOne === 'x'){
			multiply(numOne, numTwo);
		} else if (funcOne === '/'){
			divide(numOne, numTwo);
		} else if (funcOne === '+'){
			add(numOne, numTwo);
		} else if (funcOne === '-'){
			subtract(numOne, numTwo);
		}
		//Remove used elements from arrays
		numArray.pop(numOne);
		numArray.pop(numTwo);
		funcArray.pop(funcOne);
};

//bottom level math functions
const multiply = (numOne, numTwo) => {
	let productMe = numOne * numTwo;
	num2Array.push(productMe);
	$('header').text(numOne + " x " + numTwo + " = " + productMe);
}

const divide = (numOne, numTwo) => {
	let divideMe = numOne / numTwo;
	num2Array.push(divideMe);
	$('header').text(numOne + " / " + numTwo + " = " + divideMe);
}

const add = (numOne, numTwo) => {
	let addMe = numOne + numTwo;
	num2Array.push(addMe);
	$('header').text(numOne + " + " + numTwo + " = " + addMe);
}

const subtract = (numOne, numTwo) => {
	let subtractMe = numOne - numTwo;
	num2Array.push(subtractMe);
	$('header').text(numOne + " - " + numTwo + " = " + subtractMe);
}

















