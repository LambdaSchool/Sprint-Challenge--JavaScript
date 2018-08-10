// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
 function consume(param1, param2, cb) {
   cb(param1, param2);
}

consume('burgers', 'pizza', function(param1, param2) {
   console.log(param1, param2);
});


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(param1, param2, cb) {
  cb(param1 + param2);
}

add(300, 564, function(total) {
  console.log(total);
});

function multiply(param1, param2, cb) {
  cb(param1 * param2);
}

multiply(300, 564, function(total) {
  console.log(total);
});

function greeting(param1, param2, cb) {  //GO BACK TO THIS
  console.log(cb(param1 + param2));
}

greeting('Michelle', 'Paredes',function(first_name, last_name) {
 console.log('Hello '+ first_name + ' ' + last_name + ', nice to meet you!');
});
// greeting(name);


/* Step 3: Check your work by uncommenting the following calls to consume(): */
//consume(2,2,add); // 4
// consume(10,16,multiply); // 160
// consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 


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