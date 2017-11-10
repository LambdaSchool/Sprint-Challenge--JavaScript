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
    newArr[i] = cb(elements[i]);
  }
  return newArr;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let call = 0;
  return (...args) => {
    if (call === n) return null;
    call++;
    return cb(...args);
  };
};

const cacheFunction = cb => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = {};
  return (vals) => {
    if (vals in cache === false) {
      cache[vals] = cb(vals);
    }
    return cache[vals];
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  // let reverseString = '';
  // // for (let i = str.length - 1; i >= 0; i--) {
  // //   reverseString += str[i];
  // // }
  // // return reverseStr;
  if (str.length === 0) return str;
  return reverseStr(str.slice(1)) + str[0];
};

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let val;
  let flag = true;
  const checkLeave = (tree) => {
    Object.keys(tree).forEach(key => {
      if (val === undefined && typeof key !== 'object') {
        val = tree[key];
        return undefined;
      }
      if (typeof tree[key] === 'object') {
        return checkLeave(tree[key]);
      }
      if (tree[key !== val]) {
        flag = false;
        return undefined;
      }
      return undefined;
    });
  };
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
