'use strict';

//Here is an array of numbers
var numbers = [2,0,6,6,8,5,1,6,2,2];

//Use a forEach() loop to sum up the numbers in the array. Log out the sum.
var sum = 0;
numbers.forEach(function(item){
  sum = sum + item;
})
console.log(sum);

//Use a forEach() loop to find the biggest number in the array. Log out this number.
//Hint: use a king-of-the-hill search!

var maxNum = numbers[0];
numbers.forEach(function(item){
  if(item>maxNum){
    maxNum = item;
  }
})
console.log(maxNum);

//Use a forEach() loop to find the INDEX of the largest number in the array.
//Check https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
//for what arguments the method will pass to its callback function.
//Log out the index



//Here is an array of names
var names = ['ada','bob','chris', 'diya', 'emma'];

//Define a function capitalize() that takes in a String and returns a new String
//that has the first letter in upper case.
//See http://www.w3schools.com/jsref/jsref_obj_string.asp
//Call your function on a lowercase word and log out the result

function capitalize(arg_str){
  return arg_str.charAt(0).toUpperCase()+arg_str.slice(1);
}
console.log(capitalize("ying"));

//Create a variable `capNames` that is the names capitalized.
//Use the map() function with your capitalize() function as the callback.
//Log out the capitalized names.

var capNames = names.map(capitalize);
console.log(capNames);

//Create a variable `greetings` that is an array of names with "Hello, I'm " in
//front of each. Use the map() function with an ANONYMOUS callback function.
//Log out the greetings array.

var greetings = names.map(function(item){
  return "Hello, I'm "+item
})
console.log(greetings);

//Here is an array of objects representing people
var people = [
  {name:'Alice', role:'Student'}, {name:'Bob', role:'Student'},
  {name:'Ada', role:'TA'}, {name:'Stanley', role:'Student'},
  {name:'Joel', role:'Prof'}, {name:'Charles', role:'TA'},
];

//Create a variable `students` that is an array of just the people who are students.
//Use the filter() function with an ANONYMOUS callback function.
//Log out the variable.

var students = people.filter(function(n){
  return n.role=="Student";
})
console.log(students);

//Challenging! Create a variable `peopleByRole` which is an object whose keys are
//the different roles ('Student', 'TA', 'Prof') and whose values are arrays with
//the names of the people with those roles:
//  {
//    Student: ['Alice', 'Bob', 'Stanley'],
//    TA: ['Ada', 'Charles'],
//    Prof: ['Joel']
//  }
//Using the reduce() function with an ANONYMOUS callback function.
//Log out the variable.
