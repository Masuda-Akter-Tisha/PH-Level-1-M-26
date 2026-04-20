 const array = [1, 2, 3, 4, 5];

 for (const item of array) {
    console.log(item);
    
 }

 const employee = {
    name: 'jhone Doe',
    1: 'one desk',
    'home-address': '123 main st',
    salary: 50000,
    position: 'software engineer'
}

for (const key in employee) {
    const value = employee[key];
    console.log(`${key}: ${value}`);
    
}