// data access
const data = [
    {id: 1, name: 'abul', address: 'kochu khet'},
];

// console.log(data[0].address);


const products = {
    count: 5000,
    data: [
        {id: 1, name: 'lenovo laptop', price: 65000},
        {id: 2, name: 'macbook', price: 165000},
    ]
}

// console.log(products.data[1].price);

const user = {
    id: 5001,
    name: 'Shoriful',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poribag er goli',
            third: 'no dorai',
        },
        city: 'Dhaka',
    }
}

// console.log(user.address.street.second)

const user2 = {
    id: 5002,
    name: 'pori bibir majar',
    address: {
        city: 'chittagonj',
        country: 'Bangladesh',
    }
}