let num = "";
let num2 = "";
let operator = "";


$('.number').on('click', (e) => {
	const numClicked = $(e.currentTarget)
	if (operator === "") {
		num += numClicked.text();
		$('#output').text(num)
	} else {
		num2 += numClicked.text();
		$('#output').text(num2);
	}
})

$('.operator').on('click', (e) => {
	const operatorClicked = $(e.currentTarget)
	operator = operatorClicked.text();
	$('#output').text(operator);
})

const math = (n1, n2) => {
	let calcValue;

	if (operator === "+") {
		calcValue = parseInt(n1) + parseInt(n2);
	} else if (operator === "-") {
		calcValue = parseInt(n1) - parseInt(n2);
	} else if (operator === "x") {
		calcValue = parseInt(n1) * parseInt(n2)
	} else if (operator ==="÷") {
		calcValue = parseInt(n1) / parseInt(n2)
	}
	return calcValue;
}

$('.equals').on('click', () => {
	let result = math(num, num2);
	$('#output').text(result)
	num2 = "";
	num = result;
})

$('.delete').on('click', () => {
	num = "";
	operator = "";
	calcValue = null;
	$('#output').text(0)
})