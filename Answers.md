# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
#<h3>Describe some of the differences between .forEach & .map.</h3>
<p>
    One difference between .forEach and .map is that the latter returns a new array with the transformed values while the former does not return anything. 
    Another difference is that .forEach allows the callback to change the original array while .map preserves the original.
</p>
#<h3>Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?</h3>
<p>Data Types:</p>
<ul>
    <li>Boolean</li>
    <li>Number</li>
    <li>String</li>
    <li>Object</li>
    <li>undefined</li>
    <li>Null</li>
</ul>
<p>
    An array is a type of object that holds lists of elements in a certain order using indices. Arrays are special because their elements are ordered and can be manipulated by various methods from the Array.prototype.
</p>
#<h3>What is closure? Can you code out a quick example of a closure?</h3>
<p>
    Closure is the ability of functions to create their own scope, function scope, and have access to data in the scopes surrounding them. This means that variables inside a function block can access variables outside their functoin's scope but the reverse is not true. Variables in outer scopes do not have access to function scopes.
</p>

```
    function add3(n) {
        function addMsg() {
            return `The sum of n + 3 is ${n + 3}`;
        }
    }
```
#<h3>Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)</h3>
<p>Rules of 'this':</p>
<ul>
    <li>Global/Window Binding</li>
    <p>Global Binding of 'this' occurs when context for this is not specified. This is a default behavior when a this context is not a specific scope but the global scope.</p>
    <li>Implicit Binding</li>
    <p>Implicit Binding refers to a 'this' context being defined in dot notation by a method. The scope for a this is the object a method will do something with (object.method()).</p>
    <li>Explicit Binding</li>
    <p>Explicit Binding refers to the use of the call, apply, and bind methods from Function.prototype to call a function with a 'this' value with another object and some arguments.</p>
    <li>New Binding</li>
    <p>New Binding refers to a 'this' context as the scope of a newly created object by a constructor function.</p>
</ul>