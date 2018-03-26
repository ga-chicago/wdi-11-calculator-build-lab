$('.calculator').on('click',(e)=>{
	console.log($(this));
	console.log($(e.target).text());

	calculator.clicked.push($(e.target).text());

})


// A user should be able to select numbers so that they can do things with them.
const calculator ={

	clicked:[],



	// A user should be able to add numbers together.
	add (num1,num2){

		return num1 + num2;
	},

	// A user should be able to subtract numbers.
	subtract (num1,num2){

		return num1 - num2;
	},

	// A user should be able to divide numbers.

	divide (num1,num2){

		return num1/num2;
	},
	// A user should be able to multiply numbers together.
	multiply (num1,num2){

		return num1 * num2;
	},
	// A user should be able to see the output.

	output(result){

		$('.screen').text(result);
	},
	// A user should be able to clear all operations and start from 0.

	clear(){
		$('.screen').empty()
	}

	

	// getStoredNumber=()=>{
	// 	for(let i = 0; i < this.clicked; i ++){
	// 		if()
	// 	}


	// }


}	



