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
