//The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }
// Rewrite it, to perform the same, but without if, in a single line.
// Make two variants of checkAge:
// Using a question mark operator ?
// Using OR ||
function checkAge(age){
    return (age > 18) || confirm('Did parents allow you?');
}

//Write a function min(a,b) which returns the least of two numbers a and b.
// For instance:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1
function findMin(a,b){
    return a>b ? b : a;
}

//Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

function pow(x,n){
    let answer = 0;
    for(let i = 1; i < n; i++){
        answer *= x;
    }
    return answer;
}
let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
} else {
    alert( pow(x, n) );
}

//Replace Function Expressions with arrow functions in the code below:
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
//
// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );
let ask = (question, yes, no) => {
    if(confirm(question)) yes();
    else no();
}
ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution")
);