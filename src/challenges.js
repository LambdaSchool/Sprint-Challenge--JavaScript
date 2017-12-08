// 1. Describe some of the differences between .forEach & .map.
        // .forEach simply iterates over each element within an array and acts like a For loop where you can then do whatever function you like to it,
        // .map returns a new array given the function  you input as a parameter in the .map function
// 2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
        // Number, string, object, array, boolean. An array can hold all the other data types within itself and is fully mutable with a robust selection of prototype functions.
// 3. What is closure? Can you code out a quick example of a closure?
        // The combination of a function and its outer environments, accessing the outer scope from within.
        //   function name () {
        //     const firstName = 'Jacob';
        //     const lastName = 'Gakstatter';
        //     function makeName () {
        //       console.log(`${firstName} ${lastName}`);
        //     }
        //   };
// 4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
        // 1- without context, the scope of this is the console/global
        // 2- implicit binding - using this in a direction creation of an object (const obj(arg) = {this.name = arg.name})
        // 3- explicit binding - using call/apply/bind to specifically state the prototype that the object belongs to and give direct context to this
        // 4- new binding - using the new keyword in combination with a construction function, where new gives context to this


/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  if (Array.isArray(elements)) {
    for (let i = 0; i < elements.length; i++) {
      cb(elements[i], i, elements);
    }
  } else if (elements === null) {
    return elements;
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const ourArr = [];
  each(elements, thing => {
    ourArr.push(cb(thing));
  });
  return ourArr;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.

};

const cacheFunction = cb => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
};

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
};

const flatten = elements => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
};

module.exports = {
  each,
  map,
  limitFunctionCallCount,
  cacheFunction,
  reverseStr,
  checkMatchingLeaves,
  flatten,
};
