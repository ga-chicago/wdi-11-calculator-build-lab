//USER STORIES
// A user should be able to select numbers so that they can do things with them.

let numbers = $('.numbers');
let screen = $('#screen');
let equals = $('#equals');
let clear = $('#clear')
let number = null;
let operator = null;
let number2 = null;


numbers.on('click', function (event) {
	// get numerica value
	num1 = $(event.currentTarget).text()

	if(number != null && operator != null) {
		number2 = screen.text(screen.text() + num1).text();
	} else {
		// store the number from the screen somewhere 
		number = screen.text(screen.text() + num1).text();
	}
})

let operators = $('.operators');

operators.on('click', function (event) {

	// store the operator
	operator = $(event.currentTarget).text();

	// if number (or oper) has a value (!= null)
	if(number != null && operator != null) {
		// clear screen
		screen.empty();
	}
})


equals.on('click', function (event) {
		if(operator === '+') {
			screen.text(parseInt(number) + parseInt(number2));
		} else if(operator === '-') {
			screen.text(parseInt(number) - parseInt(number2));
		} else if (operator === '*') {
			screen.text(parseInt(number) * parseInt(number2));
		} else {
			screen.text(parseInt(number) / parseInt(number2));
		}
})


clear.on('click', function (event) {
	number = null;
	operator = null;
	number2 = null;
	screen.empty();
})


// A user should be able to add numbers together.
// A user should be able to subtract numbers.
// A user should be able to divide numbers.
// A user should be able to multiply numbers together.

// A user should be able to see the output.

// A user should be able to clear all operations and start from 0


