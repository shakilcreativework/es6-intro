/**
 * 8 ways to get undefined
 * 1. variable that is not initialized will give undefined
 */

let first;
// console.log(first);

function second(a, b){
    const total = a + b;
}

const result = second();
// console.log(result);