console.log("hello! this is a calculator!");

//User Stories
//user clicks numbers and operators to calculate mathematical expression

//Data State
//numbers clicked
//operators clicked
//function performed to evaluate mathematical expression entered

//define variables for clarity
let $display = $('#display');


let $numbers = $('.num');
let $operators = $('.operations');
let $equals = $('#equals');
let $clear = $('#clear');

//these will be used in the final expression
let intOne = [];
let intTwo = [];

//define functions for clicking on numbers, operators & clear/equals IDs
$numbers.on('click', () => {
  //get value of number
  numValue = $(event.currentTarget).text()
    console.log(numValue);
  //store number displayed
  numToDisplay = $display.text($display.text() + numValue).text();
});

$operators.on('click', () => {
  //get value of number clicked
  opsValue = $(event.currentTarget).text()
  console.log(opsValue);
	//store operations displayed
	opToDisplay = $display.text($display.text() + opsValue).text();
	// }
});

$equals.on('click', () => {
  //get value of numbers and operators
  //here is where the math logic lives!
  eqValue = $(event.currentTarget).text()
  console.log(eqValue);
  if(opToDisplay === '+') {
    numValue + numToDisplay
  } else if(opToDisplay === '-') {
    numValue - numToDisplay
  } else if (opToDisplay === '*') {
    numValue * numToDisplay
  } else if (opToDisplay === '/') {
    numValue / numToDisplay
  } else {
    null;
  }

  //still needs functionality
});

$clear.on('click', () => {
  clearValue = $(event.currentTarget).text()
  console.log(clearValue);
//if all data = null, clear the display
  intOne = null;
	$operators = null;
	intTwo = null;
	$display.empty()
});
