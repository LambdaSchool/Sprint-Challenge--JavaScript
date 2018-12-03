1. Describe the biggest difference between `.forEach` & `.map`.

.forEach runs a function specified for each element in the array.
.map returns an array with the specified function having been run on the original array.

2. What is the difference between a function and a method?

functions perform actions outside of classes/objects, while methods are functions that operate within classes/objects.

3. What is closure?

A 'closure' gives you access to an outer function's scope from an inner function. A closure is created every time a function is created. To use a closure:
A)define a function inside another function
B)return it or pass it to another function.

The inner function will have access to the variables in the outer function scope (even after the outer function has returned).

4. Describe the four rules of the 'this' keyword.

- 1.  Window binding- Without context, "this" refers to the entire window object.

- 2.  Implicit binding- Outside of window binding, if the function is called by dot notation, you look to the left of the dot for the "this"

- 3. New binding- If a constructor function is used with 'new' then 'this' refers to the object created by that function.
- 4. Explicit binding- If a .call or .apply method is used, the first argument used is what "this" points to.

5. Why do we need super() in an extended class?
   super() calls the parent class, and therefore binds .this to the child class as a reference to the parent.
