"use strict";
let age = 25;
//Write an if condition to check that age is between 14 and 90 inclusively.
//“Inclusively” means that age can reach the edges 14 or 90.
if(age >=14 && age <=90);

//Write an if condition to check that age is NOT between 14 and 90 inclusively.
//Create two variants: the first one using NOT !, the second one – without it.
if(!(age >= 14 && age <= 90));

//Write the code which asks for a login with prompt.
//If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
//The password is checked as follows:
//If it equals “TheMaster”, then show “Welcome!”,
//Another string – show “Wrong password”,
//For an empty string or cancelled input, show “Canceled”
let username = prompt("Whos there?", '');
if(username === 'Admin'){
    let password = prompt("Password", '');
    if(password === 'TheMaster'){
        alert('Welcome');
    }else if(password ===''){
        alert('Cancelled')
    }else{
        alert('Wrong Password!');
    }
}else if(username === ''){
    alert('Cancelled');
}else{
    alert('I dont know you')
}