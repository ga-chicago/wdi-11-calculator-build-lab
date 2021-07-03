console.log('Calculator')

let firstNumber = null;
let secondNumber = null;
let operator = null;
let weStillNeedToClearOutTheFirstNumber = true;

$('button').on('click', function(e){
	const value = $(e.currentTarget).text()
	
	if(value === 'C'){
		console.log('Clear')
		$('header').empty()
		let firstNumber = null;
        let secondNumber = null;
        let operator = null;

	} 	else if (value === '=') {

		secondNumber = ($("header").text())
        $("header").empty()
        console.log(secondNumber)
        if(operator === "+") { 
        $("header").append(parseInt(firstNumber) + parseInt(secondNumber))
        console.log(parseInt(firstNumber) + parseInt(secondNumber))

    }   else if(operator === "-") {
    
        $("header").append(parseInt(firstNumber) - parseInt(secondNumber))
        console.log(parseInt(firstNumber) - parseInt(secondNumber))

    }   else if(operator === "*") {
        
        $("header").append(parseInt(firstNumber) * parseInt(secondNumber))    
        console.log(parseInt(firstNumber) * parseInt(secondNumber))

    }   else if(operator === "/") {
        
        $("header").append(parseInt(firstNumber) / parseInt(secondNumber))
        console.log(parseInt(firstNumber)  / parseInt(secondNumber))
    }
        
    }	else if(value === "+" || value === "-" || value === "*" || value === "/") {
    	
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