// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume(a, b, cb) {
  return cb(a,b)
} 

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(a,b){
  return a+b;
}
function  multiply(a, b) {
  return a*b;
}
// console.log(add(1,2));
function greeting(firstName, lastName) {
  return `Hello ${firstName} ${lastName}, nice to meet you!`
}
/* Step 3: Check your work by uncommenting the following calls to consume(): */
consume(2,2,add);
console.log(consume(2,2,add));
 // 4
 console.log(consume(10,16,multiply));
 
consume(10,16,multiply); // 160
console.log(consume("Mary","Poppins", greeting));

consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
  // because the nestedFunction is creating a closure scope around the outer function and its variables, retaining access to the variables it needs from that if it is invoked...if it is not invoked in the outer function, it will not create a closure.

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