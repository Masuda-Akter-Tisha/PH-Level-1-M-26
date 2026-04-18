console.log (add (10,40));
// traditional function declaration
function add (num1, num2) {
    return num1+num2;
}

// function expression
const add2 = function (num1, num2) {
    return num1+num2;
}
console.log (add2 (20,50));

// arrow function
const add3 = (num1, num2) => num1 + num2;
console.log (add3 (15,50));

const multiply = (a, b) => a*b;
console.log (multiply (2,5));

const multiply2 = a => a*10;
const multiply3 = (a) => a*10;

const pie = () => 3.1416;
console.log(pie ());

const isEven = num => num % 2 === 0;
console.log(isEven (20));


const sum = (a, b, c, d) => a + b + c +d;

const doMath = (x, y) => {
    const add = x + y;
    const diff = add - y;
    return diff;
}

const result = doMath (30, 50);
console.log(result);

// document.getElementById ().addEventListener ('click', function () {});

// document.getElementById ().addEventListener ('click', (event) => {});

// default parameter + Arrow function

const price = (banana , orange = 0) => banana * 2 + orange;

console.log(price (200));


