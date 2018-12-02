// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume(x,y,cb){
  return cb(x,y);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
const add = function(num1,num2){
return (num1 + num2)
}
add(param1,param2);

const multiply = function(num1,num2){
  console.log(num1 * num2)
}
multiply(param1,param2);

const greeting = function(first_name,last_name){
  console.log(first_name + '' + last_name + 'nice to meet you!')
}
greeting(param1,param2)

const divide = function(num1,num2){
  console.log(num1/num2)
}
divide(param1,param2);

const remainder = function(num1,num2){
  console.log(num1%num2)
}
remainder(param1,param2);

const combine = function(num1,num2){
  console.log(num1+num2)
}
combine(param1,param2)

const subtract = function(num1,num2){
  console.log(num1 - num2)
}
subtract(param1,param2);


/* Step 3: Check your work by un-commenting the following calls to consume(): */
// consume(2,2,add); // 4
// consume(10,16,multiply); // 160
// consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
/* nestedFunction can access internal because in order to console log internal it has to reach outside it's own scope in order to complete it's job. */

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