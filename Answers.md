1. Describe the biggest difference between `.forEach` & `.map`.
  a forEach will iterate over a list/arr/object and apply an operation on each item in the list/arr/object. a map will iterate over a list/arr/object and return a new list/arr/object of equal size with the specified operation on each item

2. What is the difference between a function and a method?
a function is a named set of operations that can be explicitly passed data to perform said operations on and return a value.  A method is a function associated with an object/class constructor that is called with a name of the object that contains it and it is implicitly passes the object on which it is called.

3. What is closure?
  a closure is a type of scope that occurs when an inner nested function calls variables from the outer containing function, retaining that variable in memory (a backpack) for use when it is invoked...if it is not invoked, the closure will not occur. this scoping is also referred to as lexical scope.

4. Describe the four rules of the 'this' keyword.
  i. Window Binding = when this is not bound to a specific thing, but rather bound to the global or window/console object.
  ii. Implicit Binding = when a function is called with dot notation the this keyword is bound to the object to the left of the dot.
  iii. Explicit Binding = when you use the call or apply methods to bind this.
  iv.  New Binding = when the new word is used to create a new object from a constructor.

5. Why do we need super() in an extended class?
  super replaces the .call method and grants access the the parent constructors properties and methods, need to accompany the extends keyword.
