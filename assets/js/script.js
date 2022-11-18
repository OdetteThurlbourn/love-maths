// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

// With the below in place it shows our script file is loading and event handlers are firing

    // There is a more modern way of iteration than below syntax
    //for (let i = 0; i < buttons.length; i++)
    //This is a 'for loop'
    for (let button of buttons) {
        button.addEventListener("click", function() {
                // 'button' represents an individual button element'
                // add an 'if statement' check attribute of data type to see its value
                // "this" referes to the addition button and what happens when it's clicked
                if (this.getAttribute("data-type") === "submit") {
                    alert("You clicked Submit");
                } else {
                    let gameType = this.getAttribute("data-type");
                    runGame(gameType);
                }
            })
        }

        runGame("addition");
})

/** 
 * THIS IS A DOCSTRING AND A POP US OF THE DESCRIPTION YOU WRITE IS VISABLE WHEN THE FUNCTION IS CALLED ELSWHERE
 * 
 * The main game "loop", called when the script is first loaded
 * and after the user's amswer has been processed
 */
function runGame(gameType) {

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() *25 ) + 1;
    let num2 = Math.floor(Math.random() *25 ) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}



function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivideQuestion() {

}