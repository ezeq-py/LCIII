// 1. Crear un arreglo de nombres a partir del siguiente input:
// let input = [
// { name: "John", age: 21, city: "New York" },
// { name: "Mike", age: 28, city: "Moscow" },
// { name: "Danny", age: 30, city: "London" },
// { name: "Lisa", age: 26, city: "Paris" },
// { name: "Sophie", age: 19, city: "Berlin" },
// ];

let input = [
    { name: "John", age: 21, city: "New York" },
    { name: "Mike", age: 28, city: "Moscow" },
    { name: "Danny", age: 30, city: "London" },
    { name: "Lisa", age: 26, city: "Paris" },
    { name: "Sophie", age: 19, city: "Berlin" },
];

const newArray = input.map((name) => name.name);

console.log(newArray);

const newArray2 = (array) => array.map((item) => item.name);

console.log(newArray2(input));