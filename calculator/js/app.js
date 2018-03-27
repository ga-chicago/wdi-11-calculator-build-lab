let formula = "";

function updateInput(e) {
	formula += $(e.currentTarget).text();
	console.log(formula);
}

function updateWithOper(e) {
	$('#output').text("");
	updateInput(e);
}

function updateInputBox(e) {
	
	let output = $('#output');
	if (output.text() === "0") {
		output.text("");
	}
	output.text(output.text() + $(e.currentTarget).text());
	updateInput(e);
}

function updateInputWithPer(e) {
	
	let output = $('#output');

	output.text(output.text() + $(e.currentTarget).text());
	updateInput(e);
}

function calculate() {
	let answer = eval(formula);
	console.log(answer);
	$('#output').text(answer);
	formula = answer;
}

function clear() {
	$('#output').text(0);
	formula = "0";
}

$('.num').on('click', updateInputBox);

$('.oper').on('click',updateWithOper);

$('.per').on('click',updateInputWithPer);

$('.submit').on('click',calculate);

$('.clear').on('click',clear);

