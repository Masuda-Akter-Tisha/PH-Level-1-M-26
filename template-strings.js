const firstName = 'Masuda';
const lastName = 'Tisha';

// const aboutMe = 'my name is'+' '+ firstName;
const aboutMe = `my first name is ${firstName} and my last name is ${lastName}`
console.log(aboutMe);

// const giveMe = `Banana price ${(10+20)*4 - 300}`
const giveMe = `girls Name ${'monalisa' +' '+'mehebuba'}`

console.log (giveMe);

function div (name, price, description, model) {
    const div = `
    <div class = 'card'>
    <p>${name.toUpperCase ()} Borolox</p>
    <p>Mobile phone price is $${price}</P>
    <p>${description}</P>
    <p>model is: ${model}</P>
    </div>
    `;
    console.log (div);
}
div ('Iphone',50000,'This is a very authentic mobile phone of apple company',999);
