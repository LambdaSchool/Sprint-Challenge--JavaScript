1. The biggest difference is that .map returns an array while .forEach does not.
2. A method is a function that is defined within an object, while a function can be defined globally.
3. Closure is the ability of a function to call upon a variable name that was definied outside of that function scope. However, variables defined outside of that function cannot call upon a variable defined inside of a that particular function.
4. (1) Window binding refers to the idea that unless otherwise specified, `this` always refers to the window.
(2) Implicit Binding is when you invoke a function and the `this` is a reference to teh left hand side of the invocation
(3) New Binding allows you to create new objects with use of the new keyword and this keyword to help reference the object data.
(4) Explicit Binding refers to the user being able to choose what to bind together with the use of `this`.

5. We require the super() because it gives access to the `this `keyword from the base class.

