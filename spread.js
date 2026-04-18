// console.log(Math.max (10, 22, 45, 30, 100));
const maxNumber = Math.max (10, 22, 45, 30, 100);
console.log(maxNumber);

const array = [10, 20, 45];
console.log(...array);

const numbers = [20, 33, 45, 100, 345];
const maxNumbers = Math.max (...numbers);
console.log(maxNumbers);

const params = [100, 45, 330];
function sum (x, y, z) {
    console.log(x,y,z);
    
    const add = x + y + z;
    return add;
}

const result = sum (...params);
console.log(result);

// const array1 = [1, 2, 3, 4];
// const array2 = array1;

// array2.push (5);

// console.log(array1);
// console.log(array2);

const array1 = [1, 2, 3, 4];
const array2 = [11, ...array1, 44];

// array2.push (5);

console.log(array1);
console.log(array2);


// const person = {name: 'Masuda', age: 23,}
// const person2 = person;

// person.salary = 20000;

// console.log(person);
// console.log(person2);

const person = {name: 'Masuda', age: 23,}
const person2 = {...person, designation: 'web-development'};

person.salary = 20000;
person2.salary = 25000;

console.log(person);
console.log(person2);

