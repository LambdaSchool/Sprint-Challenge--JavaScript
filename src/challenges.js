/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
};

const map = (elements, cb) => {
  var newString = [];
  for (let i = 0; i < elements.length; i++) {
    elements[i] += newString;
  } return newString;
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  let i = 0;
  return (... args) {
    if (i < n) {
      i++;
      return cb(... args);
    }
    return null
  }
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
};

const cacheFunction = cb => {
  return cb(object)
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
  str.reverse();
  return str;
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
};

const checkMatchingLeaves = obj => {
  console.log(Object.keys(obj))
  if (obj[i] === obj[i]) {
    return true;
  }
  return false;
  // return true if every property on `obj` is the same
  // otherwise return false
};

const flatten = elements => {
  let myArray = [];
  for (let i = 0; i < elements.length; i++) {
    if(Array.isArray(elements[i])) {
      myArray = myArray.concat(flatten(elements[i]));
    } else {
      myArray.push(elements[i]);
    }
  }
  return myArray;
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
