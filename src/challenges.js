/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) { cb(elements[i]); }
}; each([1,2,3], (element) => console.log(element));

const map = (elements, cb) => {
  const _elements = [];
  for (let i = 0; i < elements.length; i++) { _elements.push(cb(elements[i])); }
  return _elements;
}; console.log(map([1,2,3], (element) => element + 100));

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
  const _elements = [];
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      _elements.push.apply(_elements, (flatten(elements[i])));
    }
    else { _elements.push(elements[i]) }
  }
  return _elements;
}; console.log(flatten([1,2,3,4,5,[1,2,3,4]]));

module.exports = {
  each,
  map,
  limitFunctionCallCount,
  cacheFunction,
  reverseStr,
  checkMatchingLeaves,
  flatten,
};
