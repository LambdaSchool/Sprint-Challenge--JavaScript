// ==== Callbacks ====  

/* Step 1: Create a callback function
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

const consume = function(param1, param2, cb) {
  return cb(param1, param2);
};

// function consume(param1, param2, cb) {
//   return cb(param1, param2);
// }

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(param1, param2) {
  return (param1+param2);
}

function multiply(param1, param2) {
  return (param1*param2);
}

function greeting(param1, param2) {
  return ("Hello " + param1 + " " + param2 + ", nice to meet you!");
}


/* Step 3: Check your work by uncommenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Question 1: Explain in your own words why the example below is a closure.

// Explanation: Closure is when functions have access to variables outside their scope/chain/code block.

// Answer: nested function has access to the lexical slope of myFunction and can access the internal variable. myFunction also has acces to the external variable.

// Question 2: Given the example below, what scope is the external variable in?
// I'd say, and I'm none to confident here, that the scope of the external varialbe is gloabal??? 
// It's not inside of the function, for the varialble exists outside of it.
// I'd say that external exists globally.
// I'd say the internal exists inside of the function.
// I'm not usure about the third level though and that is where some confusion comes (or the secodn level if global is considered the third and last level, etc.)
// Further research tells me three levels of scope are: 1: global 2: function 3: block
// I'd still say that the external variable has global scope for it's not in a function nor a block of code (between curly braces).

//Global Scope was the answer!

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