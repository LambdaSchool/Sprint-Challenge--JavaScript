// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(firstArg, secondArg, cb) {
  return cb(firstArg, secondArg);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

function greeting(firstName, lastName) {
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
}

/* Step 3: Check your work by uncommenting the following calls to consume(): */

console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!

// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

// nestedFunction() has access to the scope outside of it just like myFunction() has access to `external`, a variable in the global scope.
// Functions first look to their own local scope to access a variable, and if it isn't found, then they continue to the scope above them.
// Let's say I want to use the variable `external` in nestedFunction(). It'll look to itself first, then myFunction(), and then the global scope.
// Outer functions do not have access to inner functions. 

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();