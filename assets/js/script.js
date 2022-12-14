// // Wait for the DOM to finish loading before running the game
// // Get the button elements and add event listeners to them

// document.addEventListener("DOMContentLoaded", function () {
//     let buttons = document.getElementsByTagName("button");

//     // With the below in place it shows our script file is loading and event handlers 
//     // are firing

//     // There is a more modern way of iteration than below syntax
//     //for (let i = 0; i < buttons.length; i++)
//     //This is a 'for loop'
//     for (let button of buttons) {
//         button.addEventListener("click", function() {
//             // 'button' represents an individual button element'
//             // add an 'if statement' check attribute of data type to see its value
//             // "this" referes to the addition button and what happens when it's clicked
//             if (this.getAttribute("data-type") === "submit") {
//                 checkAnswer();
//             } else {
//                 let gameType = this.getAttribute("data-type");
//                 runGame(gameType);
//             }
//         });
//     }

//     document.getElementById("answer-box").addEventListener("keydown", function(event) {
//         if (event.key === "Enter") {
//             checkAnswer();
//         }
//     });

//     runGame("addition");
// });

// /** 
//  * THIS IS A DOCSTRING AND A POP US OF THE DESCRIPTION YOU WRITE IS VISABLE WHEN THE FUNCTION IS CALLED ELSWHERE
//  * 
//  * The main game "loop", called when the script is first loaded
//  * and after the user's amswer has been processed
//  */
// function runGame(gameType) {

//     document.getElementById("answer-box").value = "";
//     document.getElementById("answer-box").focus();

//     // Creates two random numbers between 1 and 25
//     // Math.floor rounds down to the whole number
//     // Math.random generates random numbers

//     let num1 = Math.floor(Math.random() * 25) + 1;
//     let num2 = Math.floor(Math.random() * 25) + 1;

//     if (gameType === "addition") {
//         displayAdditionQuestion(num1, num2);
//     } else if (gameType === "multiply") {
//         displayMultiplyQuestion(num1, num2);
//     } else if (gameType === "subtract") {
//         displaySubtractQuestion(num1, num2);
//     } else if (gameType === "division") {
//         displayDivisionQuestion(num1, num2);
//     } else {
//         alert(`Unknown game type: ${gameType}`);
//         throw `Unknown game type: ${gameType}. Aborting!`;
//     }
// }


// /** 
//  * Checks the answer against the first element in 
//  * the returned calculateCorrectAnswer array
//  */
// function checkAnswer() {

//     let userAnswer = parseInt(document.getElementById("answer-box").value);
//     let calculatedAnswer = calculateCorrectAnswer();
//     let isCorrect = userAnswer === calculatedAnswer[0];

//     if (isCorrect) {
//         alert("Hey! You got it right! :D");
//         incrementScore();
//     } else {
//         alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
//         incrementWrongAnswer();
//     }

//     runGame(calculatedAnswer[1]);

// }

// /**
//  * Gets the operand (the numbers) and the operator (plus, minus etc)
//  * directly from the DOM, and returns the correct answer.
//  */

// // JS gets data from DOM and returns it as a string, using "parseInt" makes sure we treat the value as an interger
// function calculateCorrectAnswer() {

//     let operand1 = parseInt(document.getElementById('operand1').textContent);
//     let operand2 = parseInt(document.getElementById('operand2').textContent);
//     let operator = document.getElementById("operator").textContent;
//     console.log('*****', operator, operand1, operand2)
//     if (operator === "+") {
//         return [operand1 + operand2, "addition"];
//     } else if (operator === "x") {
//         return [operand1 * operand2, "multiply"];
//     } else if (operator === "-") {
//         return [operand1 - operand2, "subtract"];
//     } else if (operator === "/") {
//         return [ operand1 / operand2,  "divide"];
//     } else {
//         alert(`Unimplemented operator ${operator}`);
//         throw `Unimplemented operator ${operator}. Aborting!`;
//     }
// }

// /**
//  * Gets the current score from the DOM and increments it by 1
//  */
// function incrementScore() {

//     let oldScore = parseInt(document.getElementById("score").innerText);
//     document.getElementById("score").innerText = ++oldScore;
// }

// /**
//  * Gets the current tally of incorrect answers from the DOM and increments it by 1
//  */
// function incrementWrongAnswer() {

//     let oldScore = parseInt(document.getElementById("incorrect").innerText);
//     document.getElementById("incorrect").innerText = ++oldScore;

// }

// function displayAdditionQuestion(operand1, operand2) {
//     document.getElementById('operand1').textContent = operand1;
//     document.getElementById('operand2').textContent = operand2;
//     document.getElementById('operator').textContent = "+";
// }

// function displaySubtractQuestion(operand1, operand2) {
//     document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
//     document.getElementById('operand2').textContent = operand1 > operand2 ? operand1 : operand2;
//     document.getElementById('operator').textContent = "-";
// }

// function displayMultiplyQuestion(operand1, operand2) {
//     document.getElementById('operand1').textContent = operand1;
//     document.getElementById('operand2').textContent = operand2;
//     document.getElementById('operator').textContent = "x";
// }

// function displayDivideQuestion() {
//     operand1 = operand1 * operand2;

//     document.getElementById("operand1").textContent = operand1;
//     document.getElementById("operand2").textContent = operand2;
//     document.getElementById("operator").textContent = "/";

// }

// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
	let buttons = document.getElementsByTagName("button");

	for (let button of buttons) {
		button.addEventListener("click", function() {
			if (this.getAttribute("data-type") === "submit") {
				checkAnswer();
			} else {
				let gameType = this.getAttribute("data-type");
				runGame(gameType);
			}
		});
	}

	document.getElementById("answer-box").addEventListener("keydown", function(event) {
		if (event.key === "Enter") {
			checkAnswer();
		}
	});

	runGame("addition");
});

function runGame(gameType) {

	// Generate two random numbers between 1 and 25
	// Math.floor rounds down to the whole number
	// Math.random generates random numbers

	document.getElementById("answer-box").value = "";
	document.getElementById("answer-box").focus();

	let num1 = Math.floor(Math.random() * 25) + 1;
	let num2 = Math.floor(Math.random() * 25) + 1;

	if (gameType === "addition") {
		displayAdditionQuestion(num1, num2);
	} else if (gameType === "multiply") {
		displayMultiplyQuestion(num1, num2);
	} else if (gameType === "subtract") {
		displaySubtractQuestion(num1, num2);
	} else if (gameType === "divide") {
        displayDivideQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}


function checkAnswer() {

	// Checks the answer against the first element in
	// the returned calculateCorrectAnswer array

	let userAnswer = parseInt(document.getElementById("answer-box").value);
	let calculatedAnswer = calculateCorrectAnswer();
	let isCorrect = userAnswer === calculatedAnswer[0];

	if (isCorrect) {
		alert("Hey! You got it right! :D");
		incrementScore();
	} else {
		alert(`Awwww...you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
		incrementWrongAnswer();
	}

	runGame(calculatedAnswer[1]);

}

function calculateCorrectAnswer() {

	// Gets the operands (the numbers) and the operator (plus, minus etc)
	// directly from the DOM
    
	let operand1 = parseInt(document.getElementById("operand1").textContent);
	let operand2 = parseInt(document.getElementById("operand2").textContent);
	let operator = document.getElementById("operator").textContent;

	if (operator === "+") {
		return [operand1 + operand2, "addition"];
	} else if (operator === "x") {
		return [operand1 * operand2, "multiply"];
	} else if (operator ==="-") {
		return [operand1 - operand2, "subtract"];
	} else if (operator === "/") {
        return [ operand1 - rem / operand2,  "divide"];
	} else {
		alert(`Unimplemented operator ${operator}`);
		throw `Unimplemented operator ${operator}, aborting!`;
	}
}

function incrementScore() {

	// Gets the current score from the DOM and increments it

	let oldScore = parseInt(document.getElementById("score").innerText);
	document.getElementById("score").innerText = ++oldScore;

}

function incrementWrongAnswer() {

	// Gets the current tally of incorrect answers from the DOM and increments it

	let oldScore = parseInt(document.getElementById("incorrect").innerText);
	document.getElementById("incorrect").innerText = ++oldScore;

}

function displayAdditionQuestion(operand1, operand2) {

	document.getElementById("operand1").textContent = operand1;
	document.getElementById("operand2").textContent = operand2;
	document.getElementById("operator").textContent = "+";

}

function displaySubtractQuestion(operand1, operand2) {

	document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
	document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
	document.getElementById("operator").textContent = "-";

}

function displayMultiplyQuestion(operand1, operand2) {

	document.getElementById("operand1").textContent = operand1;
	document.getElementById("operand2").textContent = operand2;
	document.getElementById("operator").textContent = "x";

}

// Add your division question here









// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
	let buttons = document.getElementsByTagName("button");

	for (let button of buttons) {
		button.addEventListener("click", function() {
			if (this.getAttribute("data-type") === "submit") {
				checkAnswer();
			} else {
				let gameType = this.getAttribute("data-type");
				runGame(gameType);
			}
		});
	}

	document.getElementById("answer-box").addEventListener("keydown", function(event) {
		if (event.key === "Enter") {
			checkAnswer();
		}
	});

	runGame("addition");
});

function runGame(gameType) {

	// Generate two random numbers between 1 and 25
	// Math.floor rounds down to the whole number
	// Math.random generates random numbers

	document.getElementById("answer-box").value = "";
	document.getElementById("answer-box").focus();

	let num1 = Math.floor(Math.random() * 25) + 1;
	let num2 = Math.floor(Math.random() * 25) + 1;

	if (gameType === "addition") {
		displayAdditionQuestion(num1, num2);
	} else if (gameType === "multiply") {
		displayMultiplyQuestion(num1, num2);
	} else if (gameType === "subtract") {
		displaySubtractQuestion(num1, num2);
	} else if (gameType === "division") {
        displayDivisionQuestion(num1, num2);
    } else {
		alert(`Unknown game type ${gameType}`);
		throw `Unknown game type ${gameType}, aborting!`;
	}

}

function checkAnswer() {

	// Checks the answer against the first element in
	// the returned calculateCorrectAnswer array

	let userAnswer = parseInt(document.getElementById("answer-box").value);
	let calculatedAnswer = calculateCorrectAnswer();
	let isCorrect = userAnswer === calculatedAnswer[0];

	if (isCorrect) {
		alert("Hey! You got it right! :D");
		incrementScore();
	} else {
		alert(`Awwww...you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
		incrementWrongAnswer();
	}

	runGame(calculatedAnswer[1]);

}

function calculateCorrectAnswer() {

	// Gets the operands (the numbers) and the operator (plus, minus etc)
	// directly from the DOM
    console.log('In here')
	let operand1 = parseInt(document.getElementById("operand1").textContent);
	let operand2 = parseInt(document.getElementById("operand2").textContent);
	let operator = document.getElementById("operator").textContent;
    console.log('*****', operator, operand1, operand2)
	if (operator === "+") {
		return [operand1 + operand2, "addition"];
	} else if (operator === "x") {
		return [operand1 * operand2, "multiply"];
	} else if (operator ==="-") {
		return [operand1 - operand2, "subtract"];
	} else if (operator === "/") { 
        return [operand1 / operand2, "division"];
    } else {
		alert(`Unimplemented operator ${operator}`);
		throw `Unimplemented operator ${operator}, aborting!`;
	}
}

function incrementScore() {

	// Gets the current score from the DOM and increments it

	let oldScore = parseInt(document.getElementById("score").innerText);
	document.getElementById("score").innerText = ++oldScore;

}

function incrementWrongAnswer() {

	// Gets the current tally of incorrect answers from the DOM and increments it

	let oldScore = parseInt(document.getElementById("incorrect").innerText);
	document.getElementById("incorrect").innerText = ++oldScore;

}

function displayAdditionQuestion(operand1, operand2) {

	document.getElementById("operand1").textContent = operand1;
	document.getElementById("operand2").textContent = operand2;
	document.getElementById("operator").textContent = "+";

}

function displaySubtractQuestion(operand1, operand2) {

	document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
	document.getElementById("operand2").textContent = operand1 > operand2 ? operand1 : operand2;
	document.getElementById("operator").textContent = "-";

}

function displayMultiplyQuestion(operand1, operand2) {

	document.getElementById("operand1").textContent = operand1;
	document.getElementById("operand2").textContent = operand2;
	document.getElementById("operator").textContent = "x";

}

function displayDivisionQuestion(operand1, operand2) {
    operand1 = operand1 * operand2;
    
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "/";
    
   
    
}