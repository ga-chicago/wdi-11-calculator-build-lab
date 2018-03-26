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

		// clear display

		// remove any stored information from state


	}


	// option 4: equals
	else if(value === "=") {


		// perform the operation -- this is where you convert

			// print the result to the screen

		// remove stored info from state


		console.log("equals")




	}

	//option 2:  operator 
	else if(value === "+" || value === "-" || value === "*" || value === "/") {

		operator = value


		// grab the number from the display and store in variable
		firstNumber = ($("header").text())


		// (track)/store operator

		



		// now we're storing a new number 





		// need to grab second number enterered and store it in secondNumber




	// option 1: number
	} else   {

		// if operator is not null
		if(operator != null && weStillNeedToClearOutTheFirstNumber) {
			// clear the screen
			$("header").empty()
			weStillNeedToClearOutTheFirstNumber = false;

		} 
			


			if(firstNumber === null) {
				($("header").text())
		} 	else {
			secondNumber = ($("header").text())
		}


			$("header").append(value)

	}






})


const clearDisplay = () => {
	$("header").empty()
}

// 
const add = function(a, b) {

	const addition = a + b

	console.log(addition)

	return addition

}

// add(firstNumber)
