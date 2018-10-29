1. Describe the biggest difference between `.forEach` & `.map`.

  The biggest difference is that `.map` returns a new array, while `.forEach`
  acts like a for loop, iterating through each index of the array and performing
  the requested function upon it.  For example, `.forEach` can mutate an
  existing array, while `.map` will return a new array mutated from the original.

2. What is the difference between a function and a method?

  A function is a block of code that be declared in a program, and then re-used,
  throughout a program by invoking it.  A method is a function that is bound to
  and object, usually by being declared inside of that object, or attached to
  that object's prototype.  Methods must be invoked through an object, while
  functions can be invoked independently.

3. What is closure?
  Closure refers to the way in which functions can access data outside of their
  local scope.  If a function is nested inside of another function, the nested
  function can access any data from the outside function.  If the inner function
  is returned, and it has a reference to data in the outer function, that data
  will be remembered as it was at the moment the inner function was returned.  
  That data can then be accessed and changed by that instance without effecting
  the same data in another instance of the same function.  If this explanation
  looks like a mess, I apologized, I still find this hard to articulate properly.

4. Describe the four rules of the 'this' keyword.
  * Global/Window binding
      When used outside of an object, `this` will refer to the global, or window
      scope object.
  * Implicit binding
      When `this` is used inside of an object, it is bound to that object.  When
      a `this` property or method is invoked, it is bound to the object to the
      left of the dot in the invocation statement.
  * Explicit binding
      `this` can be bound to any object you choose by using the `.apply`, `.call`,
      or `.bind` methods.  `.apply` and `.call` will invoke a function, with `this`
      bound to the item(s) used as arguments, while `.bind` will return a new
      instance of the function it is called on with `this` bound to the argument
      passed into `.bind`.
  * New binding
      If `this` is used in a constructor function, `this` will be bound to whatever
      object is return by that constructor function.

5. Why do we need super() in an extended class?
  super() allows the extended class' constructor to pass up parameters needed by
  the parent class(es)' constructor to allow it to return a new object
  correctly.
