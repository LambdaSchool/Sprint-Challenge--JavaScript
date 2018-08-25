#### Describe the biggest difference between .forEach & .map.
`.forEach()` iterates over an array but doesn't return anything.
In contrast, `.map()` transforms the elements of an array and returns a new array of the same size.

#### What is the difference between a function and a method?
Functions and methods are interchangeable terms. Any function in the global scope becomes a method of window.
The difference lies in how the terms are generally used. 
Function refers to any function in the global scope, whereas method refers to a function of an object or class.

#### What is closure?
Closure is when we have access to a function's scope after the function is created.

#### Describe the four rules of the 'this' keyword.
**Window/Global** - The value of `this` is window when in the global scope.  
**Implicit** - The value of `this` is the object preceding the function call with a dot or the object passed in as a function argument.  
**New** - The value of `this` is the object created when the `new` keyword is used to create it.  
**Explicit** - The value of `this` is the object we explicitly pass in to `.apply()`, `.bind()` or `.call()`.  

#### Why do we need super() in an extended class?
`super()` is used to call the parent constructor with the parameters of the subclass.