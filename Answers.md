1. The biggest difference between forEach() and map() is that forEach() doesn't
  acutally return a new array.

2. A method is a function this is a member of a object or class. If a function is assigned
  globally, they are technically methods of the global object. So in JavaScript, a function
  will always be a method. 

3. Closures are functions that refer to independent (free) variables. In other words,
  the function defined in the closure 'remembers' the environment in which it was created.

4. Rule #1: "this" will be the window/console object when in the global scope. Rule #2:
  whenever a function is called by a preceding dot, the object before that dot is "this".
  Rule #3: whenever a constructor function is used, "this" refers to the specific instance
  of the object that is created and returned by the constructor function. Rule #4: whenever
  JavaScript's call or apply (and bind) is used, "this" is explicitly defined. 

5. Super() is needed in an extended class so that any new attributes gets passed up back to
  the constructor of the parent object.
