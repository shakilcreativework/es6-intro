function sum(a, b, c){
    console.log(typeof arguments);
    const result = a + b + c;
    return result;
}

const total = sum(44, 74, 78, 843, 9347, 9489);
console.log(total);