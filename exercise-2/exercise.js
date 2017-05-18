'use strict';

//Create an array `numbers` that contains the numbers 10, 40, 20, 50
//Log out the array
var numbers = [10, 40, 20, 50];
console.log(numbers);

//Use bracket notation to add the number 16 to the end of the array
//Log out the array
numbers[4] = 16;
console.log(numbers);

//Use the splice() method to add the nubmer 30 between the 40 and the 20.
//See https://www.w3schools.com/jsref/jsref_splice.asp
//Log out the array
numbers.splice(2,0,30);
console.log(numbers);

//Log out the length of the array. Use the .length property
console.log(numbers.length);

//Use bracket notation to add the number 100 at an index equal to the
//length of the array + 1.
//Log out the array as well as its length. What happened?
numbers[numbers.length+1] = 100;
console.log(numbers);

//Create a variable `rect` that represents a rectangle. This should be an object
//with properties:
//  x-cooordinate of 30, y-coordinate of 50, width of 100, height of 50
//Log out the rectangle
var rect = {x:30, y:50, width:100, height:50};
console.log(rect);

//Set the rectangle's height to be the square root of its width. Use Math.sqrt()
//Use *dot notation* to access the properties!
rect.height = Math.sqrt(rect.width);

//Log out the rectangle's area. Use *dot notation* to access the properties!
console.log(rect.width*rect.height);

//Create a variable `circle` that represents a circle. This should be an object
//with properties
//  center-x-coordinate, center-y-coordinate, and radius
//assigned the first 3 numbers from the above array (respectively)
//Log out the circle
var circle = {
  cx: numbers[0],
  cy: numbers[1],
  radius: numbers[2]
};
console.log(circle);

//Create a variable `shapes` that represents a list of shapes. The list should
//contain the rectangle and the circle
//Log out the variable. Be sure to inspect it in the developer console!
var shapes = [rect, circle];
console.log(shapes);

//Add a new ANONYMOUS object to the `shapes` array representing a triangle.
//The triangle should have a width of 33 and a height of 44.
//Log out the shapes array
shapes.push({width:33, height:44})

//Log out the triangle's `hypotenuse` property. What do you get?
console.log(shapes[2].hypotenuse);

//Assign the triangle inside the `shapes` array a 'hypotenuse' property of 55
//What happens if you inspect the previously logged array?
shapes[2].hypotenuse = 55;
