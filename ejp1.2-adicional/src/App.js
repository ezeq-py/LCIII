import './App.css';

import React from 'react';
import Products from "./components/Products/Products"
import Persons from './components/Persons/Persons';
import Family from './components/Family/Family';

function App() {
  const products = ["table", "couch", "chair1", "chair2"];
  const names = ["Parker", "Simmons", "Lewis", "Poe"];
  const persons = [{
    name: "Juan",
    age: 26
  },
  {
    name: "Gabriel"
    , age: 27
  },
  {
    name: "Valentina",
    age: 22
  },
  {
    name: "Paula",
    age: 25
  },
  {
    name: "Andrés",
    age: 20
  }];

  const descendingOrderSort = (a, b) => b.age - a.age;
  const sortedPersons = persons.sort(descendingOrderSort)

  return (
    <div className="App">
      <h1>Ejercicio 1</h1>
      <Products products={products} />
      <h1>Ejercicio 2</h1>
      <Persons names={names} />
      <h1>Ejercicio 3</h1>
      <Family persons={sortedPersons}/>
    </div>
  );
}

export default App;
