const product = {
    name: 'Iphone',
    price: 799,
    description: 'A smartphone by Apple'
}

const newPrice = product.price + 100;
const newName = `This is a new ${product.name}`;
console.log(newPrice);
console.log(newName);

const name = product.name;
const price = product.price;

product.job = 'Web-Developer'

console.log(name,price);
console.log(product);

// destructuring
const {name: fruit, price: money, color, test = 'sweet'} = {
    name: 'banana',
    color: 'yellow',
    brand: 'International',
    price: `$${20}`,
    test: 'less sweet'
};
//  console.log(fruit,money);
console.log(color, test);

 const [first, second] = [10, 20, 30, 55];
 console.log(first, second);

 const [height, width] = [776, 5525];
 console.log(height, width);
 
 const {salary: {junior, senior}} = {
    jobName: 'web-Developer', 
    salary: 
    {
        junior: `$${20000}`, 
        senior: `$${30000}`
    }
};
console.log(junior, senior);

// const [{name1, address: {home}}] = [
//     {
//         name1: 'Alex',
//         address: {
//             home: 'UK',
//         },
//         age: 20
//     },

//     {
//         name2: 'jhon',
//         address: 'US',
//         age: 25
//     },

//     {
//         name3: 'Abida',
//         address: 'India',
//         age: 22
//     }
// ]
 
// console.log(name1, home);


const employees = [
    {
        names: 'Alex',
        address: 'UK',
        age: 20
    },

    {
        names: 'jhon',
        address: 'US',
        age: 25
    },

    {
        names: 'Abida',
        address: 'India',
        age: 22
    }
]
 
for (let {names, age} of employees) {
    console.log(`${names} is ${age} years old`);
    
}

function numbers () {
    return [1, 2, 3, 4, 5];
}

const [num1, num2] = numbers ();
console.log(num1, num2);
