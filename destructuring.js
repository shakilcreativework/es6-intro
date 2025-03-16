const actor = {
    name: 'Ananata',
    age: 30,
    phone: '01300494949',
    money: 133343434
};

const {name, age: boyos, phone, money} = actor;

// console.log(actor.phone);
// console.log(actor.name);
// console.log(actor.age);
// console.log(actor.money);
// console.log(name, boyos, phone, money);



// array destructuring
const numbers = [46, 98];
const [first, second] = numbers;
const [x, y] = numbers;
console.log(x, y);