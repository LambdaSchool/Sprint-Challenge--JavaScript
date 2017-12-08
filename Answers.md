# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## 1. Differences between `.forEach` & `.map`.
#### Output
`.map` will output a new array using the results of the callback function invoked
`.forEach` will always output `undefined`, although the callback function may output anything: A new array,
an object, strings, or numbers.
#### Use Cases
`.map` can be used almost anywhere in the processing of an array, since it outputs an array, which can be
passed into another (callback) function on down the chain of an algorithm or process.
`.forEach`, since it has no output other than `undefined`, will be most useful as the last step in a process
or in some sort of side process. 

## 2. Types (primatives)
There are seven (7) data types as of ECMAScript 6:
1. Boolean: true/false
2. Null: null
3. Undefined: kind of an empty placeholder, to be defined / assigned later
4. Number: numbers, for math and stuff
5. String: typically letters, but sometimes numbers too if they aren't going to be used in calculations
6. Symbol (new as of ECMAScript 6)
7. Object (including Arrays)

#### What's so special about Arrays?
1. Ryan **LOVES** them!
2. Arrays are in the inheritance chain of a program (courtesy of `prototype`), which allows commands like
`indexOf`, `push`, `pop`, etc to assist with managing lists and sets of data.

## 3a. What is Closure?

Closure is the end of the compiler's search for the value of a variable called inside a function. When the
compiler is presented a variable (`x`) which is not declared in the same Scope as where it is called, it must
search additional layers of Scope to find `x`. If the variable declaration is not found in any layer of Scope
accessible to the function where `x` was called, an error will result. If it is, we have CLOSURE!

## 3b. Coding Example of Closure

function doSomething() {
  let thing = 'Play fetch';         // thing is in the local Scope of doSomething
  function withSomeone(name) {
      console.log(`I like to ${thing} with ${name}.`);  // thing is called in a different Scope
    }
}

The compiler must go 'up' one layer in Scope to find the declaration of thing in order to achieve Closure.

## 4. Four rules of the `this` keyword

1. When a function is contained in the Global Scope, `this` refers to Global/console/window.
2. When a function is called with a preceeding dot, the object before the dot is `this`.
3. When a Constructor Function is used, `this` refers to the Specific Instance of the object created. 
4. When `.call` or `.apply` are used, `this` is explicitly defined.
