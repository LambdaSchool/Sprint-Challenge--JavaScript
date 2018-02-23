// Additional Notes for this Submit:
//  // I understand each and map well and reproduce them from scratch
//  // The rest of them, I can rewrite, and explain step by step, BUT there are key things that I do not understand.
//  // Overall, I feel like I understand everything on a high level, but very little in depth.

/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const newArr = [];
  for (let i = 0; i < elements.length; i++) {
    newArr.push(cb(elements[i]));
  }
  return newArr;
};

/* ======================== Closure Practice ============================ */

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.

  let count = 0;
  return (...args) => {
    if (count < n) {
      count++;
      return cb(...args);
    }
    return null;
  };
};

// #QUESTIONS
// I can explain what is going on, but still don't feel that comfortable with this.
// Is there a way to do this with a for loop?

const cacheFunction = cb => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.

  const cache = {};
  return input => {
    if (Object.prototype.hasOwnProperty.call(cache, input)) return cache[input];
    cache[input] = cb(input);
    return cache[input];
  };
};

// QUESTION:
// This is the solution in my notes, but really don't understand the question or the answer, even after the JavaScript-I review :(

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */

const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  if (str.length <= 1) {
    return str;
  }
  return reverseStr(str.substr(1)) + str[0];
};

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const array = [];
  const flatten = item => {
    Object.keys(item).forEach(value => { // Object flattened one level into an array of strings (same as objects.js) and iterated over
      if (typeof item[value] === 'object') { // If item is an object, then it is recursively passed through 'nestedObject'
        flatten(item[value]);
      } else {
        array.push(item[value]); // If its is not an object, but a string, then it will push the item to 'array' array
      }
    });
  };
  flatten(obj); // Returns the obj as a flattened array of strings.

  for (let i = 1; i < array.length; i++) { // for loop iterates over array
    const memo = array[0];
    if (array[i] !== memo) {
      return false; // if any of the elements in the array are not equal to array[0], then return false.
    }
  }
  return true;
};

const flatten = elements => {
  const flat = [];
  elements.forEach(item => {
    if (Array.isArray(item)) {
      flat.push(...flatten(item));
    } else flat.push(item);
  });
  return flat;
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
