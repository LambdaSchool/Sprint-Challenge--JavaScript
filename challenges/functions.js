// ==== Callbacks ====  

/* Step 1: Create a callback function
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume (param1, param2, cb) {
  return cb(param1, param2);
}

console.log(consume);

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add (param1, param2) {
 return param1 + param2
}

console.log(add(2,2));

function multiply (param1, param2) {
  return param1 * param2;
}

console.log(multiply(5,5))


function greeting (firstName, lastName) {
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
}

console.log(greeting("Tekashi", "69"))


/* Step 3: Check your work by uncommenting the following calls to consume(): */

let addCB = consume(2, 2, add); // 4
console.log(addCB)

let multiplyCB = consume(10,16,multiply); // 160
console.log(multiplyCB)

let greeterCB = consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!
console.log(greeterCB)

// ==== Closures ==== 
// Question 1: Explain in your own words why the example below is a closure.

// Explanation: It's a closure because myFunction returns an inner function and that inner function has access to the outter function's 'internal' variable as well as the 'external' variable in the global scope.

// Question 2: Given the example below, what scope is the external variable in?

// Explanation: The exteranal variable is in the global scope.

let external = "I'm outside!";

function myFunction() {
  let internal = "Hello! I'm inside the function";
  console.log(external);

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();