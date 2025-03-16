/**
 * 1. var let const
 * 2. default parameter
 * 3. templete string
 * 4. arrow function
 * 5. destracturing and spread operator
 * 6. Object.keys, Object.values, Object.entries
 * 7. for of used in array and string
 * 8. for in loop used in object
 */

const a = 46;
const numbers = [33, 54, 75];
const person = {
    name: 'sakib khan',
}

const message = `Hi, ${person.name} has a: ${a} access to ${numbers[2]}`;
// console.log(message);


const square = x => x * x;
const sum = (a, b) => a + b;

const {age, z, ...others} = {x: 2, y: 5, z: 3, name: 'object', age: 55}; 

const [first, second, ...reaming] = ['ram', 'sam', 'jodu', 'modhu'];