// 3. Dado un arreglo de objetos de países que poseen dos propiedades: name y
// population, ordenarlos de mayor a menor en cuanto a su población utilizando la
// función de arreglo sort().
// Ejemplo de un objeto del arreglo: { name: Argentina, population: 458100000}

const countries = [
    {name:"Argentina", population: 458100000},
    {name:"Brazil", population: 214300000},
    {name:"Peru", population: 33720000},
    {name:"Bolivia", population: 12080000},
    {name:"Paraguay", population: 6704000}
]

const comparePopulation = (a, b) => b.population - a.population;

const sortCountries = (array, sorting) => array.sort(sorting);

const sortedCountries = sortCountries(countries, comparePopulation);

console.log(sortedCountries);