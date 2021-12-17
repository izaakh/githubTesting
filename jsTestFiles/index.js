// checkSpeed(120);
//
// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const maxPoints = 12;
//   const pointGap = 5;
//
//   if (typeof (speed) !== 'number')
//     console.log(NaN);
//
//   if (speed < speedLimit + pointGap) {
//     console.log('Ok');
//     return;
//   }
//
//   const points = Math.floor((speed - speedLimit) / pointGap);
//   if (points >= maxPoints)
//     console.log(`Licence Suspended`);
//   else
//     console.log(`Points ${points}`);
// }

// let output = fizzBuzz(3);
// console.log(output);
//
// function fizzBuzz(input) {
//   if (typeof input !== 'number')
//   return NaN;
//
//   if ((input % 3 === 0) && (input % 5 === 0))
//     return `FizzBuzz`;
//
//   if (input % 5 === 0)
//     return `Fizz`;
//   if (input % 3 === 0)
//     return `Buzz`;
//
//     return input;
//
// }

// showNumbers(10);
//
// function showNumbers(limit) {
//   // let evenAndOdd = [];
//   for (let count = 0; count <= limit; count++) {
//     const message  = (count % 2 === 0) ? 'EVEN' : 'ODD';
//     // if (count % 2 !== 0)
//     //   evenAndOdd.push('EVEN');
//     // else
//     //   evenAndOdd.push('ODD');
//
//     console.log(`${count} ${message}`);
//   }
//   // console.log(evenAndOdd);
// }

// const mixed = [1, 2, ''];
// console.log(countTruthy(mixed));
//
// function countTruthy(array) {
//   let multipleArray = 0;
//   for (let item of array)
//     if (item)
//       multipleArray++;
//   return multipleArray;
// }

// const movie = {
//   title: 'a',
//   releaseYear: 2018,
//   rating: 4.5,
//   director: 'b'
// };
//
// showProperties(movie);
//
// function showProperties(obj) {
//   for (let field in obj)
//     if (typeof obj[field] == 'string')
//       console.log(field, obj[field]);

// }

// console.log(sum(10));
//
// function sum(limit) {
//   // let multipleArray = [];
//   // let tempOfThree = 0;
//   // let tempOfFive = 0;
//   // let sumTotal = 0;
//   //
//   // for (let i = 1; i <= limit; i++) {
//   //   tempOfThree = 3 * i;
//   //   tempOfFive = 5 * i;
//   //   if (tempOfThree <= limit)
//   //     multipleArray.push(tempOfThree);
//   //   if (tempOfFive <= limit)
//   //     multipleArray.push(tempOfFive);
//   //
//   // }
//   // // for (let index of multipleArray)
//   // // sumTotal += multipleArray[index];
//   // for (let i = 0; i < multipleArray.length; i++)
//   //   sumTotal += multipleArray[i]
//   // return(sumTotal);
//
//   let sum = 0;
//
//   for (let i = 0; i <= limit; i++)
//     if (i % 3 === 0 || i % 5 === 0)
//       sum += i;
//
//   return sum;
//   }

// const marks = [80, 80, 50];
//
// console.log(calculateGrade(marks));
//
// function calculateGrade(marks) {
//
// const average = calculateAverage(marks);
//
//   if (average < 60) return 'F';
//   if (average < 70) return 'D';
//   if (average < 80) return 'C';
//   if (average < 90) return 'B';
//     return 'A';
// }
//
// function calculateAverage(array){
//
//   let sum = 0;
//
//   for (let value of array)
//     sum += value;
//   return sum / array.length;
// }

// showStars(10);

// function showStars(rows) {

//   for (let row = 1; row <= rows; row++) {
//     let pattern = '';
//     for (let i = 0; i < row; i++)
//       pattern += '*';
//     console.log(pattern);
//   }

// }

// showPrimes(4);
//
// function showPrimes(limit) {
//   if (limit <= 1) console.log(`No Primes Available`);
//   for (let number = 2; number <= limit; number++)
//     if (isPrime(number)) console.log(number);
// }
//
// function isPrime(number) {
//   for (let factor = 2; factor < number; factor++)
//     if (number % factor === 0)
//       return false;
//   return true;
// }
//Factory Functions
// function createCircle(radius) {
//     return {
//       radius,
//       draw() {
//         console.log('draw');
//       },
//     };
//   }
  
//   const circle1 = createCircle(1);
//   console.log(circle1);
  
//   function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//       };
//   }
  
//   const circle2 =  new Circle(1);
//   console.log(circle2);
  
//   const circle = {
//     radius: 1,
//   };
  
//   circle.colour = 'yellow';
//   circle.draw = function () {};
  
//   console.log(circle);
  
//   delete circle.colour;

//   console.log(circle);
// let obj = {
//     value: 10
// };

// function increase(array) {
//     array.value++;
// }

// increase(obj);
// console.log(obj);

// const address = {
//     street: 'fairfield road',
//     city: 'London',
//     postCode: 'RH15 8NP'
// };

// // function showAddress(address){
// //     for (const key in address) {
// //         console.log(`${key}: ${address[key]}`);
// //     }
// // }

// // showAddress(address);


// function CreateAddress(street, city, postCode){
//     this.street = street,
//     this.city = city,
//     this.postCode = postCode
// }

// const address1 = new CreateAddress('a', 'b', 'c');
// const address2 = new CreateAddress('a', 'b', 'c');
// const address3 = address1;

// function areEqual(address1, address2){
//  return address1.street === address2.street && 
//         address1.city === address2.city && 
//         address1.postCode === address2.postCode;

// }

// function areSame(address1, address2){
//     return address1 === address3;
// }

// const blogPost = {
//     title: 'world',
//     body: 'abc',
//     author: 'me',
//     views: 100,
//     comments: [{
//             author: 'name',
//             body: 'text'
//         },
//         {
//             author: 'name',
//             body: 'text'
//         },
//     ],
//     isLive: true
// };

// function CreatePost(title, body, author) {
//     this.title = title,
//         this.body = body,
//         this.author = author,
//         this.views = 0,
//         this.comments = [],
//         this.isLive = false
// }

// const newPost = new CreatePost('a', 'b', 'c');
// console.log(newPost);

// const listing = {
//     name: 'shop',
//     address: [{
//         street: 'street',
//         county: 'county',
//         postCode:'postCode'
//     },],
//     rating: 0,
//     review: [{
//         author: 'author',
//         body: 'body'
//     },],
//     category: [{
//         tag: 'tag'
//     },],
//     priceRange: []

// };

// let priceRanges = [
//     {label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
//     {label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
//     {label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50}
// ];


const numbers = [1, 2, 3, 4];
const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
];

const combined = numbers.concat(courses);
console.log(combined);
const slice = combined.slice(3);
console.log(slice);
// //adding elelmeents to array
// numbers.push(9);
// numbers.pop(1);
// numbers.splice(0, 0, 'a','b');
// // console.log(numbers);

// //remove elements from array
// //End 
// let last = numbers.pop();
// // console.log(numbers);
// // console.log(last);

// //beginning
// let beginning = numbers.shift()
// console.log(numbers);
// console.log(beginning);

// //middle
// let middle = numbers.splice(2, 1);
// console.log(numbers);
// console.log(middle);



// Finding primitives in array
// console.log(numbers.indexOf(1));
// console.log(numbers.lastIndexOf(4));
// console.log(numbers.includes(2));

//finding reference types in array
// let course = courses.find(function(course){
//     return course.name === 'a';
// });
// console.log(course);

// let course = courses.findIndex(function(course){
//     return course.name === 'a';
// });
// console.log(course);

// Arrow functions same as find function above
// let course = courses.find(course => course.name === 'a');
// console.log(course);