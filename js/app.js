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


//define functions for clicking on numbers, operators & clear/equals IDs
$numbers.on('click', () => {
  //get value of number
  numValue = $(event.currentTarget).text()
  console.log(numValue);
});

$operators.on('click', () => {
  //get value of number
  opsValue = $(event.currentTarget).text()
  console.log(opsValue);
});

$equals.on('click', () => {
  //get value of number
  eqValue = $(event.currentTarget).text()
  console.log(eqValue);
});

$clear.on('click', () => {
  //get value of number
  clearValue= $(event.currentTarget).text()
  console.log(clearValue);
});
