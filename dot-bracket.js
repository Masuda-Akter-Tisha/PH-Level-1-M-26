const employee = {
    name : 'Tara Miah',
    age : 50,
    occupation : 'Farmer',
    'cultivate-crops': 'paddy'
}

// dot notation
// const name = employee.name;

// bracket notation
//  const name = employee['name'];

const farmer = 'name';
const name = employee[farmer];
console.log(name);

const cultivate = employee['cultivate-crops'];
console.log(cultivate);
