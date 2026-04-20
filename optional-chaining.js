const employee = {
    name : 'Tara Miah',
    age : 50,
    occupation : 'Farmer',
    'cultivate-crops': 'paddy',
    family : {
        // mother : {
        //     age : 80,
        // },
    }
}

console.log(employee.family?.mother?.age);
