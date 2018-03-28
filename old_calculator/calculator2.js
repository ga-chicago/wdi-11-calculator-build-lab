console.log("I am building another calculator.");

let numArray = []; //Array for user input

$('.square').on('click', (e) => {
	let $targetNumber = $(e.currentTarget).text();
	numArray.push($targetNumber);
	let numReadout = numArray.join('');
	//$('header').text("Stored Numbers: " + numArray + "\n" + "Stored Functions: " + funcArray);
	$('header').text(numReadout);
	
	console.log('clicked number ' + $targetNumber);
	console.log(numArray);
})

//Click on function + store value
$('.functions').on('click', (e) => {
	let $targetFunction = $(e.currentTarget).text();
	numArray.push($targetFunction);
	let numReadout = numArray.join('');
	//$('header').text("Stored Numbers: " + numArray + "\n" + "Stored Functions: " + funcArray);
	console.log('clicked function ' + $targetFunction);
	$('header').text(numReadout);
	console.log(numArray);
})

//Make the equal button work

//Make equals button run mid level math function
$('.equals').on('click', (e) => {
	let numReadout = numArray.join('');
	let numEquals = eval(numReadout);
	$('header').text(numEquals);
	console.log(numEquals);
	
})

//Make clear button clear the arrays
$('.clear').on('click', (e) => {
	console.log('clear clicked');
	numArray.length = 0;
	console.log(numArray);
	$('header').text("OUTPUT");
})