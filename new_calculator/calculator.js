console.log("This is a Calculator!");

let numArray = []; //Array for user input

//Make number and function buttons store + display values
$('.butt').on('click', (e) => {
	let $targetNumber = $(e.currentTarget).text();
	numArray.push($targetNumber);
	let numReadOut = numArray.join('');
	$('#display p').text(numReadOut);
	console.log($targetNumber + ' clicked.')

})

//Make equals button run math
$('.equals').on('click', (e) => {
	let numReadout = numArray.join('');
	let numEquals = eval(numReadout);
	$('#display p').text(numEquals);
	console.log(numEquals);
})

//Make clear button work
$('.clear').on('click', (e) => {
	console.log('clear clicked');
	numArray.length = 0;
	console.log(numArray);
	$('#display p').text("0000");
})