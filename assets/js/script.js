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
                    alert(`You clicked ${gameType}`);
                }
            })
        }
})


function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivideQuestion() {

}