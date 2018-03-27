


$('.calculator').on('click',(e)=>{
	console.log($(this));
	console.log($(e.target).text());

	
	//Clear Button, erase Screen
	if($(e.target).text() === 'AC'){
		calculator.clear();
	}
	//Equal, solve the problem
	else if($(e.target).text()=== '='){

		calculator.solve();
	}
	// Push clicked buttons into array
	//Display on Screen
	else{
		// $('.screen').text($(e.target).text());
		calculator.clicked.push($(e.target).text());
		$('.screen').text(calculator.clicked.join().replace(/,/g,''));
	}



})


// A user should be able to select numbers so that they can do things with them.



const calculator ={
	//Array to store clicked Buttons
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
		this.clicked = [];
		$('.screen').empty()
	},

	
	//Solve the input equation
	solve(){
		
		//Iterate the For Loop
		for(let i = 0; i < this.clicked.length; i ++){


			//We want to parse number from left and right of operator
			if( this.clicked[i] === '+' || this.clicked[i] === '-' || this.clicked[i] === '/' ||this.clicked[i] === '*'){


				//Parse number on left of operator
				let leftSide = this.clicked.slice(0,[i]);
				//Parse number on right of operator
				let rightSide = this.clicked.slice([i+1],this.clicked.length)
				//Make number array into string, remove commas, then turn into number
				let firstNum = Number(leftSide.join().replace(/,/g,''));
				let secondNum = Number(rightSide.join().replace(/,/g,''));

				//Which operator was clicked and which function to run
				if(this.clicked[i] === '+'){
					this.output(this.add(firstNum,secondNum));
				}
				else if(this.clicked[i] === '-'){
					this.output(this.subtract(firstNum,secondNum));
				}
				else if(this.clicked[i] === '/'){
					this.output(this.divide(firstNum,secondNum));
				}
				else if(this.clicked[i]=== '*'){
					this.output(this.multiply(firstNum,secondNum));
				}

			}

		}	

	}



	
}	



