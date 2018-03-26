// make number buttons update the display 
// with the number selected as the last digit in the display
// let display = $("input").val();


// create function to put the value of the numbers in the display box

let output = [];
let addArray = [];
let subArray = [];
let multArray = [];
let divArray = [];
// figure out a way to store results from operations to 
// this total variable so I can cross operations
let total = 0;
$(".numbers").on("click", function(event){
	// save current button to variable
	let currentButton = (event.currentTarget);
	// convert value of current button to a  number and store in variable
	let buttonValue = (currentButton).innerText;
	// save selected values in array
	output.push(buttonValue);
	// return rejoined values from output array
	let value = Number(output.join(""));
	$("#output").val(value);
})

$("#clear").on("click", function(event) {
	// call clear function
	clear();
})
$("#add").on("click", function(event) {
	// add value in input field to array
	addArray.push($("#output").val());
	clear();
	// if array is greater than 2, eliminate, so I can work with 2 values
	if (addArray.length > 2) {
		// redefine one value as the sum of the two current values
		addArray[1] = `${Number(addArray[0]) + Number(addArray[1])}`;
		addArray.shift();
		// what this results in is [sumSoFar, newNum]
	}
	// add two current values in array, store to variable
	sum = Number(addArray[0]) + Number(addArray[1]);
	console.log(sum);
	return sum;
})
// repeat same logic for subtract, multiply, and divide, 
// just with respective names & operators

$("#subtract").on("click", function(event) {
	subArray.push($("#output").val());
	clear();
	if (subArray.length > 2) {
		subArray[1] = `${Number(subArray[0]) - Number(subArray[1])}`;
		subArray.shift();
	}
	difference = Number(subArray[0]) - Number(subArray[1]);
	console.log(difference);
	return difference;
})
$("#multiply").on("click", function(event) {
	multArray.push($("#output").val());
	clear();
	if (multArray.length > 2) {
		multArray[1] = `${Number(multArray[0]) * Number(multArray[1])}`;
		multArray.shift();
	}
	product = Number(multArray[0]) * Number(multArray[1]);
	console.log(product);
	return product;
})
$("#divide").on("click", function(event) {
	divArray.push($("#output").val());
	clear();
	if (divArray.length > 2) {
		divArray[1] = `${Number(divArray[0]) / Number(divArray[1])}`;
		divArray.shift();
	}
	quotient = Number(divArray[0]) * Number(divArray[1]);
	console.log(quotient);
	return quotient;
})

const clear = () => {
	// reset output array to blank
	output = [];
	// reset value in input field to 0
	$("#output").val(0);
}
