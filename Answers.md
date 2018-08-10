<!-- Task 2: Comprehension Questions -->

1. Describe the biggest difference between .forEach & .map.

The .map() feature returns a new array and does not mutate the original array where as .forEach() will mutate the orginal array. Both are methods that will loop over the array and act on each item.

2. What is the difference between a function and a method?

A function lives independently in javascript whereas a method is a function that exists inside of an object.

3. What is closure?

Closure is an idea that the inner function has access to its own variables as well as the variables of the outer functions. The outer functions can not access the inner function's variables unless they are returned.

4. Describe the four rules of the 'this' keyword.

- **Window Binding**
- If not bound to anything, it is bound to the window object. By using `use strict`, it will throw back undefined and not the window object.

- **Implicit Binding**
- "This" keyword usually refers to the immediate left of the dot and usually bound at the moment of invocation. It is usually scoped under the function.

- **Explicit Binding**
- We tell it exactly what "this" keyword is as in using call/apply/bind to bind the object to the function. **Call** automatically passes in one big object. **Apply** automatically interates over your the object you pass in. **Bind** is the same behavior as call but you can save it in a variable to be invoked later since it is not immediately invoked.

- **New Binding** involves constructor functions, which is a function to create objects. It automatically creates a scope and "this" keyword gets bound to this newly created object. Generally, we use a capital letter to name a constructor function and use the "new" keyword to construct the object

5. Why do we need super() in an extended class?

- Super replaces call in a sense and gives us access to the "this" keyword. It is a reference to the parent constructor and also allows us to make function calls in the parent.