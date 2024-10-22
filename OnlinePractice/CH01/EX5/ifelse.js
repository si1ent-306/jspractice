'use strict';
if ("0") {
    alert( 'Hello' );
}

//Using the if..else construct, write the code which asks:
//‘What is the “official” name of JavaScript?’
// If the visitor enters “ECMAScript”, then output “Right!”,
//otherwise – output: “You don’t know? ECMAScript!”

let answer = prompt('What is the "official" name of JavaScript?', 'ECMAScript');
if(answer === 'ECMAScript'){
    alert('Right!')
}else{
    alert('You don’t know? ECMAScript!')
}


//Using if..else, write the code which gets a number via prompt and then shows in alert:
// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.

let number = prompt("Enter number:", '');
let returnNumber = number > 0 ? 1 : number < 0 ? -1 : number == 0 ? 0 : number;
alert(returnNumber);


//let result;
//
// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

let result = a + b < 4 ? 'Below' : 'Over';


// Rewrite if..else using multiple ternary operators '?'.
//
//     For readability, it’s recommended to split the code into multiple lines.
//
//     let message;
//
// if (login == 'Employee') {
//     message = 'Hello';
// } else if (login == 'Director') {
//     message = 'Greetings';
// } else if (login == '') {
//     message = 'No login';
// } else {
//     message = '';
// }

let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
        (login == '') ? 'No login' :
            '';