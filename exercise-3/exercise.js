'use strict';

/* In the space below, implement the classic "Fizzbuzz" program. The program
   should work as follow:

   > Write a program that prints the numbers from 1 to 100. But for multiples of
   three, print "Fizz" instead of the number. For multiples of five, print "Buzz"
   instead of the number. For numbers which are multiples of both three and five,
   print "FizzBuzz".
*/

for(var i=1; i<=100; i++){
    if(i%3 == 0 && i%5 == 0){
      console.log('FizzBuzz');
    }
    else if(i%3 == 0){
      console.log('Fizz');
    }
    else if(i%5 == 0){
      console.log('Buzz');
    }
    else {
      console.log(i);
    }
}
