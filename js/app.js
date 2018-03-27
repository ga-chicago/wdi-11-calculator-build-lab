console.log("This is Linked")


// application state data
let firstNumber = null;
let secondNumber = null;


let operator = null;
let weStillNeedToClearOutTheFirstNumber = true;

// 

$(".row-of-buttons > div").on("click", (e) => {

	const value = $(e.currentTarget).text()
	


	// option 3: clear
	if(value === "Clear") {
		console.log("clear")
		$("header").empty()
		let firstNumber = null;
		let secondNumber = null;
		let operator = null;



		// clear display

		// remove any stored information from state

	}


	// option 4: equals
	else if(value === "=") {


		secondNumber = ($("header").text())
		$("header").empty()
		console.log(secondNumber)



// perform the operation -- this is where you convert
// print the result to the screen

		if(operator === "+") { 
		$("header").append(parseInt(firstNumber) + parseInt(secondNumber))
		console.log(parseInt(firstNumber) + parseInt(secondNumber))

	}   else if(operator === "-") {
	
		$("header").append(parseInt(firstNumber) - parseInt(secondNumber))
		console.log(parseInt(firstNumber) - parseInt(secondNumber))

	}  	else if(operator === "*") {
		
		$("header").append(parseInt(firstNumber) * parseInt(secondNumber))	
		console.log(parseInt(firstNumber) * parseInt(secondNumber))

	}   else if(operator === "/") {
		
		$("header").append(parseInt(firstNumber) / parseInt(secondNumber))
		console.log(parseInt(firstNumber)  / parseInt(secondNumber))
	}



		

	}

	//option 2:  operator 
	else if(value === "+" || value === "-" || value === "*" || value === "/") {

		operator = value


		console.log(operator)

		// grab the number from the display and store in variable
		firstNumber =($("header").text())
		console.log(firstNumber)


		// (track)/store operator
		clearDisplay();
	

		// need to grab second number enterered and store it in secondNumber


	// option 1: number
	} else   {

		// if operator is not null
		if(operator != null && weStillNeedToClearOutTheFirstNumber) {
			// clear the screen
			$("header").empty()
			weStillNeedToClearOutTheFirstNumber = false;

		} 
	
			$("header").append(value)

	}


})

// moved this into the operator section to get clear 

const clearDisplay = () => {
	let firstNumber = null;
	let secondNumber = null;
	weStillNeedToClearOutTheFirstNumber = true;
	let operator = null;
	$("header").empty()
}






