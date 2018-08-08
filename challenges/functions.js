// ==== Callbacks ====  

/* Step 1: Create a callback function
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/


function consume (param1, param2, cb) {
  return cb(param1, param2);
};



/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(item1, item2) {
  return item1 + item2;
}

function multiply(item1, item2) {
  return item1 * item2;
}

function greeting(first, last) {
  return `Hello ${first} ${last}, nice to meet you!`;
};

/* Step 3: Check your work by uncommenting the following calls to consume(): */
consume(2,2,add); //?
consume(10,16,multiply); //?
consume("Mary","Poppins", greeting); //? 


// ==== Closures ==== 
// Question 1: Explain in your own words why the example below is a closure.

// the myFunction execution context remembers the environment in which it was created, which includes the 'external' variable === closure. Same for nestedFunction, it remembers its outer execution context environment, and is able to access the 'internal' variable.

// Explanation: 

// Question 2: Given the example below, what scope is the external variable in?

// global scope

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