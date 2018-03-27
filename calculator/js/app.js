let inputText = ""
let inputStuff = [];
let internalCalc = 0;


// when you click on the numbers, add that number to the output display
// grab the number
// $('.number').on('click', (e) => {
// 	if (inputText === "+" || inputText === "-" || inputText === "*" || inputText === "/") {
// 		inputStuff.unshift(inputText);
// 		inputText = "";
// 	}

// 	const numClicked = $(e.currentTarget)
// 	// grab the div class for output
// 	// add this to the text in output
// 	inputText += numClicked.text();
// 	$('.output').text(inputText)

// 	// inputStuff.unshift(inputText)

// 	// console.log(inputStuff[0]);
// })


// // operators 
// $('.operator').on('click', (e) => {
// 	inputStuff.unshift(inputText);
// 	const operatorClicked = $(e.currentTarget);
// 	inputText = operatorClicked.text()
// 	$('.output').text(inputText)
// })


// // equals sign
// $('.equals').on('click', () => {
// 	performCalculation();
// 	$('.output').text(internalCalc)
// })

// $('.delete').on('click', () => {
// 	inputText = "";
// 	inputStuff = [];
// 	internalCalc = 0;
// 	$('.output').text(internalCalc)
// })

// const performCalculation = () => {
// 	if (inputText != "") {
// 		inputStuff.unshift(inputText);
// 		inputText = ""
// 	}

// 	if (inputStuff[1] === "+") {
// 		internalCalc = parseInt(inputStuff[2]) + parseInt(inputStuff[0]);
// 	} else if (inputStuff[1] === "-") {
// 		internalCalc = parseInt(inputStuff[2]) - parseInt(inputStuff[0]);
// 	} else if (inputStuff[1] === "*") {
// 		internalCalc = parseInt(inputStuff[2]) * parseInt(inputStuff[0]);
// 	} else if (inputStuff[1] === "/") {
// 		internalCalc = parseInt(inputStuff[2]) / parseInt(inputStuff[0]);
// 	}
// 	console.log(internalCalc);
// 	return(internalCalc);
// }



// what if ...
// +=
// -=
// that works
let num;
let operator = ""
let calcValue;

$('.number').on('click', (e) => {
	const numClicked = $(e.currentTarget)
	if (operator === "") {
		
		num = numClicked.text();
		$('.output').text(num)
		console.log("num equals: " + num);
		console.log("numClicked equals: " + numClicked);
		console.log($(e.currentTarget));
		console.log("numClicked.text() equals: " + numClicked.text());
	} else {

		if (operator === "+") {
			calcValue = parseInt(num) + parseInt(numClicked.text());
			$('.output').text(num)
			num = calcValue;
		} else if (operator === '-') {
			calcValue = parseInt(num) - parseInt(numClicked.text());
			$('.output').text(num)
			num = calcValue;
			
		} else if (operator === "*") {
			calcValue = parseInt(num) * parseInt(numClicked.text());
			$('.output').text(num)
			num = calcValue;
			
		} else if (operator === "/") {
			calcValue = parseInt(num) / parseInt(numClicked.text());
			$('.output').text(num)
			num = calcValue;
			
		}
	}
	
})

$('.operator').on('click', (e) => {
	operatorClicked = $(e.currentTarget)
	operator = operatorClicked.text();
	$('.output').text(operator);
})

$('.equals').on('click', () => {
	console.log("equals statement: " + num);
	$('.output').text(num);
})

$('.delete').on('click', () => {
	num = 0;
	operator = "";
	calcValue = null;
	$('.output').text(0)
})
