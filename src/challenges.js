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
  const result = [];
  each(elements, e => result.push(cb(e)));
  return result;
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
    } return null;
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

  return (...args) => {
    const keys = Object.keys(cache);
    const argString = args.toString();
    if (keys.includes(argString)) return cache[argString];
    const result = cb(...args);
    cache[argString] = result;
    return result;
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  const result = [];

  const recurse = innerStr => {
    if (innerStr.length === 0) return;
    result.push(innerStr[innerStr.length - 1]);
    recurse(innerStr.substr(0, innerStr.length - 1));
  };

  recurse(str);
  return result.join('');
};

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const result = [];

  const recurse = innerObj => {
    Object.keys(innerObj).forEach(key => {
      if (typeof innerObj[key] === 'object') recurse(innerObj[key]);
      else result.push(innerObj[key]);
    });
  };

  recurse(obj);

  return !!result.reduce((acc, curr) => { return acc === curr ? acc : false; });
};

const flatten = elements => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  const result = [];

  const recurse = arr => {
    if (!Array.isArray(arr)) result.push(arr);
    else {
      for (let i = 0; i < arr.length; i++) {
        recurse(arr[i]);
      }
    }
  };

  recurse(elements);
  return result;
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
