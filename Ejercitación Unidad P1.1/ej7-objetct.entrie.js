// 7. Escribir una función que convierta un objeto de JS en un arreglo de JS:
// Ejemplos:
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots",
// 12]]
// toArray({}) ➞ []

const person = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    profesion: "Ingeniero"
};

// const newPerson = Object.entries(person);

// console.log(newPerson);

const toArray = (objt) => Object.entries(objt);

const newPerson = toArray(person);

console.log(newPerson);