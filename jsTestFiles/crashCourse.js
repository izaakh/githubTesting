// const name = 'Izaak';
// const age = 30;

// //Concatination
// console.log('My name is '+ name +' and I am ' + age);

// //Template literals new way of conacatination use `${}`
// console.log(`My name is ${name} and I am ${age}`);

// //arrays
// const fruits = ['apples', 'pears', 'oranges'];
// console.log(fruits);
// //add to spefic location
// fruits[3] = 'grapes';
// console.log(fruits);
// // push onto end of array
// fruits.push('mangos');
// console.log(fruits);
// // push to beginning of array
// fruits.unshift('strawberries');
// console.log(fruits);
// //remove last entry from array
// fruits.pop();
// console.log(fruits);
// Check if something is an Array
// console.log(Array.isArray(fruits));
// get the index of and array item
// console.log(`Oranges is ${fruits.indexOf('oranges')} in the array`);

// object literals
// const person = {

//     firstName: 'Izaak',
//     lastName: 'Hutchinson',
//     age,
//     hobbies: ['football', 'movies', 'films'],
//     address: {
//         street: 'Fairfield Road',
//         city: 'Burgess Hill',
//         country: 'UK'
//     }
// }
// console.log(person.hobbies[1]);

// const todos = [
//     {
//         id: 1,
//         text: 'Take out',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },    
//     {
//         id: 3,
//         text: 'Dentist appt',
//         isCompleted: false
//     }
// ];
// //console.log(todos[1].text);

// //For Loops
// for(let i = 0; i<todos.length; i++){
//     console.log(todos[i].text);
// }

// for(let todo of todos){
//     console.log(todo);
    
// }
// //For Each
// todos.forEach(function(todo){
//     console.log(todo.text);
    
// });
// //Map
// const todoText = todos.map(function(todo){
// return todo.text;
// });
// console.log(todoText);
// //Filter
// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
//     }).map(function(todo){
//         return todo.text;
//     })
//     console.log(todoCompleted);

 