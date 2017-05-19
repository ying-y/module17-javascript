'use strict';

//Define a function addFive() that takes a single argument and returns a value
//3 greater than the input.

function addFive(args){
  return args+5;
}

//Create and log a variable `twelve` that is the result of passing 7 to your
//addFive() function.

var twelve = addFive(7);
console.log(twelve);

//Create and log a variable `twelveString` that is the result of passing "7" to your
//addFive() function. What does this tell you about how the function should be
//described (e.g., in a comment?)

var twelveString = addFive("7");
console.log(twelveString);

//Create a variable `plusFive` that is equal to your `addFive` function.

var plusFive = addFive;

//Call the plusFive() function, passing in the number 9, and log the results.

console.log(plusFive(9));

//Create an ANONYMOUS function assigned to a `makePizza` variable. Thus function
//should take in two arguments (size and a topping), and then logs out a String
//describing the given pizza (e.g., "A large pizza with anchovies").

var makePizza = function(size, topping){
  console.log("A "+size+" pizza with "+topping);
}

//Call the makePizza() function with arguments 'large' and 'anchovies'.

makePizza("large", "anchovies");

//Call the makePizza() function again with THREE arguments (a size and two toppings).
//What happens?

makePizza("large", "corn", "anchovies");
// only take the first two args and ignore the third arg.

//Call the makePizza() function again with only ONE argument (no size, just a topping)
//What happens?

makePizza("corn");
//the topping will also be treated as a size--the first arg that should be passed into the function.



//Bonus: call the "myFunction" function below with whatever arguments you want!
//What happens? What can you infer about the `arguments` variable in a function?
function myFunction(){
  console.log(arguments);
};
myFunction("Ying", 23)

//arguments refer to what you passed, it's a list. arguments[0] is the first arg that you passed in. 