// 5. El profesor de Lab Computación III tiene una clase de estudiantes. Frustrado con la
// falta de disciplina, el profesor decide cancelar la clase si menos que cierta cantidad
// de estudiantes están presentes cuando la clase empieza.
// Dado un arreglo de enteros que representa la llegada de estudiantes (<=0 significa
// que se llegó temprano o a tiempo!), y la cantidad mínima de estudiantes para que el
// profesor de la clase, determinar si la clase se cancela o no.
// Devolver la cadena "YES" si la clase SE CANCELA o "NO" si la clase NO SE
// CANCELA.

const integersNumbers = [5, 10, -3, 0, 42, -8, 17, 100, -15, 7];

const minStudents = 3;

// owo = integersNumbers.map((num) => num <= 0);

// result = owo >= minStudents ? "NO" : "YES"

// const cancelClass = (array, condition) => {
//     let presentStudents = array.filter((num) => num <= 0)

//     return presentStudents.length >= condition ? "NO" : "YES"
// }

const cancelClass2 = (array, condition) => array.filter((num) => num <= 0).length >= condition ? "NO se cancela" : "Sí se cancela"


console.log(cancelClass2(integersNumbers, minStudents));
