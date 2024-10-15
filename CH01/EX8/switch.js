//switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;
//
//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;
//
//   default:
//     alert( 'We hope that this page looks ok!' );
// }
let browser = prompt("Whats your browser?", '');
if(browser === 'Edge') {
    alert('Youve got Edge')
}else if(browser === 'Firefox' || browser === 'Safari' || browser === 'Chrome' || browser === 'Opera') {
    alert('Thats good too')
}else{
    alert('We hope this page looks ok')
}
//Rewrite the code below using a single switch statement:
//let a = +prompt('a?', '');
//
// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }
//
// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }
let a = +prompt('a?', '');
switch ( a ) {
    case '0':
        alert(0);
        break;
    case '1':
        alert(1);
        break;
    case '2' || '3':
        alert('2,3');
}