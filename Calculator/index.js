//https://www.youtube.com/watch?v=I5kj-YsmWjM
//Bro Code: Build this JS calculator in 15 minutes! 🖩

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}
function calculate(){
    try {
        display.value = eval(display.value).toFixed(4);
    }catch (error){
        display.value = "Error";
    }
}