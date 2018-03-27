// make number buttons update the display 
// with the number selected as the last digit in the display


// create function to put the value of the numbers in the display box

let output = [];
let selectedNums = [];
// OK INSTEAD OF DEFINING ALL THE FUNCTIONS IN FOR EACH OPERATOR BUTTON,
// STORE THE OPERATOR IN A VARIABLE GOSH DARN IT
// assign variable for operator
let op = "";

// figure out a way to store results from operations to 
// this total variable so I can cross operations
total = 0;
$(".numbers").on("click", function(event){
	// save current button to variable
	let currentButton = (event.currentTarget);
	// convert value of current button to a  number and store in variable
	let buttonValue = (currentButton).innerText;
	// save selected values in array
	output.push(buttonValue);
	// return rejoined values from output array
	let value = Number(output.join(""));
	// add the selected number to the current numbers array
	selectedNums.push(value);
	// put the value in the input field
	$("#output").val(value);
})

$("#clear").on("click", function(event) {
	// reset output array to blank
	output = [];
	// reset the selectedNums array
	selectedNums = [];
	// reset value in input field to 0
	$("#output").val(0);
})
$("#add").on("click", function(event) {
	// store addition operator to a variable
	op = "+";
	// if array is greater than 2, eliminate, so I can work with 2 values
	if (selectedNums.length > 2) {
		// redefine one value as the sum of the two current values
		selectedNums[1] = `${Number(selectedNums[0]) + Number(selectedNums[1])}`;
		selectedNums.shift();
		// what this results in is [sumSoFar, newNum]
	}
	// reset output array so the input field can be zeroed out when the next
	// number is entered
	output = [];
})
// repeat same logic for subtract, multiply, and divide, 
// just with respective names & operators

$("#subtract").on("click", function(event) {
	op = "-";
	if (selectedNums.length > 2) {
		selectedNums[1] = `${Number(selectedNums[0]) - Number(selectedNums[1])}`;
		selectedNums.shift();
	}
	output = [];
})
$("#multiply").on("click", function(event) {
	op = "*";
	if (selectedNums.length > 2) {
		selectedNums[1] = `${Number(selectedNums[0]) * Number(selectedNums[1])}`;
		selectedNums.shift();
	}
	output = [];
})
$("#divide").on("click", function(event) {
	op = "/";
	if (selectedNums.length > 2) {
		selectedNums[1] = `${Number(selectedNums[0]) / Number(selectedNums[1])}`;
		selectedNums.shift();
	}
	output = [];
})

$("#equals").on("click", function(event){
	// set condition for 2 numbers so it doesn't give an error message
	// if there are 0 or 1 numbers in the array
	if (selectedNums.length === 2) {
		// use operator stored in variable to join the two nums as a string
		totalStr = (`${selectedNums[0] + op + selectedNums[1]}`)
		// evaluate the string and convert to a number
		totalNum = Number(eval(totalStr));
		// return the result to the input field
		if (isNaN(totalNum) || !isFinite(totalNum)) {
			// in case there's an error
			console.log("Error");
			selectedNums = [];
		} else {
			$("#output").val(totalNum);
			// zero out array so first number can be the total, which can then
			// be used to calculate again with the next number selected
			selectedNums = [];
			selectedNums[0] = totalNum;
		}	
	}
})