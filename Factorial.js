/*
*
* The Factorial.java program calculates the factorial of an 
* entered a number and printed it to the user.
* 
* @author  Wajd Mariam
* @version 1.0
* @since   2021/01/17
*/

// Imports prompt
const prompt = require('prompt-sync')({sigint: true});

// This function reverses the string passed in using recursion.
function factorialCalculation(number) {
  if (number == 1) {
    return (1);
  } else {
    return (number * factorialCalculation(number - 1));
  }
}

// Try Catch Statement:
try {
  // Getting input from users.
  let intInput = prompt(`Enter a number to get factorial of: `);
  
  // Calling function "factorialCalculation" to find factorial.
  const factorial = factorialCalculation(intInput);
  
  // Printing the factorial to the user.
  console.log(`The factorial of ${intInput} is ${factorial}` );
} catch (err) {
  console.log(``);
  console.log(`ERROR.`);
}
