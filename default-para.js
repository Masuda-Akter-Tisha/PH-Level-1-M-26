// function add (num1, num2) {
//     const total = num1 + num2;
//     console.log(num1, num2, total);
    
// }
// NAN -Not a Number
// add (10);

// default parameter
function add2 (num1, num2 = 0) {
    const total = num1 + num2;
    console.log(num1, num2, total);
    
}
add2 (10, 40);

function fullName (first, last = '') {
    const name = first + ' ' + last;
    console.log (name);
}

fullName ('masuda');

function multiply (num1, num2 = 1) {
    const multi = num1 * num2;
    console.log(multi);
    
}

multiply (10, 30);

function call (name = 'guest') {
    console.log (`hello ${name}!`);
}
call ();

/*
string ---> ''
number ---> 0 [for add]
number ---> 1 [for multiply]
Array ---> []
Object ---> {}
boolean ---> false
*/