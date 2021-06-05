const {v4} = require("uuid");

const products = [
    {
        _id: v4(),
        name: "iPhone X",
        price: 34000
    },
    {
        _id: v4(),
        name: "GeForce RTX 3900",
        price: 92000
    },
    {
        _id: v4(),
        name: "Samsung Galaxy 9",
        price: 29000
    },
];

module.exports = products;