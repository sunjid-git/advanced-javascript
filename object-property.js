const students = [
    {id: 21, name: 'sunjid'},
    {id: 25, name: 'hasan'},
    {id: 41, name: 'mafi'},
    {id: 71, name: 'tajwar'}
]

// const newArray = [];
// for (let i = 0; i <students.name; i++) {
//     const element = array[i];
//     newArray.push(element);
// }
// console.log(newArray);


const names = students.map( s => s.name)
const ids = students.map(s => s.id)
const bigger = students.filter(s => s.id>40);
const biggerOne = students.find(s => s.id>40);
console.log(biggerOne);
console.log(bigger);

// console.log(names);
// console.log(ids);