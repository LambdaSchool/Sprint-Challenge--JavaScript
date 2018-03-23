#### 1. Describe some of the differences between `.forEach` & `.map`.  
  * `.forEach` does not return any values 
  * `.map` returns a new array

#### 2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?  
  * function, object, string, number, boolean  
  * an array stores data similarily to an object 
  * the index acts as the object's key, and the vale of the array element acts as that key's value  
  * all arrays are objects, but not all objects are arrays  


#### 3. What is closure? Can you code out a quick example of a closure?  
  * closure refers to a nested function that has access to its' parent scope  

#### 4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)  
  * **implicit binding:** the object to the immediate left of the function's invocation is what `this` will refer to  
  * **explicit binding:** utilizes .call / .apply / .bind to directly state which object is passed to `this`  
  * **window binding:** if there is no reference to an object when the function is invoked, a global object will be assigned  
  * **new binding:** creates a new instanace of the constructor and passes its' own values to `this`  