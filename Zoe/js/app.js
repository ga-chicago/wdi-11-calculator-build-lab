
let num = "";
let num2 = "";
let operator = "";


$('.num').on('click', (e) => {
	const numClicked = $(e.currentTarget)
	if (operator === "") {
		num = numClicked.text();
		$('#display').text(num)
	} else {
		num2 += numClicked.text();
		$('#display').text(num2);
	}
})

$('.operations').on('click', (e) => {
	const operatorClicked = $(e.currentTarget)
	operator += operatorClicked.text();
	$('#display').text(operator);
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

$('#equals').on('click', () => {
	let result = math(num, num2);
	$('#display').text(result)
	num2 = "";
	num = result;
})

$('#clear').on('click', () => {
	num = "";
	operator = "";
	calcValue = null;
	$('#display').text(0)
});
