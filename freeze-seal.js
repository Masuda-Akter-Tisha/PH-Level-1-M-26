const king = {
    name : 'Musafa',
    age : 55,
    kingdom : 'pride lands'
}
console.log(king);

// Object.freeze (king);
Object.seal (king);

//  remove property
 delete king.age;
 //  add property
 king['is good'] = true;
 //  modified property
 king.name = 'king-Musafa';

console.log(king);
