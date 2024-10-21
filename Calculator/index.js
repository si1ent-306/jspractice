//https://www.youtube.com/watch?v=I5kj-YsmWjM
//Bro Code: Build this JS calculator in 15 minutes! 🖩

// Get a reference to the display element
const display = document.getElementById("display");

// Function to append a character to the display
function appendToDisplay(input) {
    display.value += input; // Add the input to the current value
}

// Function to clear the display
function clearDisplay() {
    display.value = ""; // Set the display value to an empty string
}

// Function to calculate the expression on the display
function calculate() {
    try {
        // Evaluate the expression
        display.value = eval(display.value);
    } catch (error) {
        // If an error occurs (e.g., invalid expression), display "Error"
        display.value = "Error";
    }
}