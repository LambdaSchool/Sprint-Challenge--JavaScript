
Describe the biggest difference between .forEach & .map.

	The biggest difference between the two is that .map() returns an array while .forEach() does not.


What is the difference between a function and a method?

	While both are functions, methods will only work on the objects they are bound to. 


What is closure?

	Closure is how Javascript is able to pass variables into nested functions without having to specifically assign them as arguments.  It seems as if the variable gets saved to memory withint he scope of its function when it is invoked and is retrievable by functions nested within.


Describe the four rules of the 'this' keyword.

	Window Binding: The main window object that 'this' points to by default.
	Implicit binidng: When a functions is defined within an object, 'this' indirectly refers to the parent 		object.
	Explicit Bnding: Using .call(), .apply(), or .bind() to directly state the object 'this' refers to.
	New Binding: When using constructor functions, 'this' refers to object class that is being created.


Why do we need super() in an extended class?

	It acts in a similar way to .call() where it assigns the new values back up to the object class that is being extended.