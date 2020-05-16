# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied array methods, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

> You have three hours to complete this challenge. Plan your time accordingly.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your team lead

1. Briefly compare and contrast `.forEach` & `.map` (2-3 sentences max)

The map method receives a function as a parameter. Then it applies it on each element and returns an entirely new array populated with the results of calling the provided function. Like map , the forEach() method receives a function as an argument and executes it once for each array element. However, instead of returning a new array like map, it returns undefined.

2. Explain the difference between a callback and a higher order function.

A higher-order function is a function that takes another function(s) as an argument(s) and/or returns a function to its callers.

A callback function is a function that is passed to another function with the expectation that the other function will call it.

3. What is closure?

A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain.



4. Describe the four rules of the 'this' keyword.

Whenever a function is contained in the global scope, the value of this inside of that function will be the window object.

Whenever a function is called by a preceding dot, the object before that dot is this.

Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.

Whenever JavaScript’s call or apply method is used, this is explicitly defined.



5. Why do we need super() in an extended class?

The super keyword in JavaScript is used in order to call the methods of the parent class. By itself, super() is used within a constructor function to call the parent constructor function.

### Task 1 - Project Set up

Follow these steps to set up and work on your project:
Make sure you clone the branch that the TK links to: the vnext branch, NOT master!

- [ done] Create a forked copy of this project.
- [ done ] Add TL as collaborator on Github.
- [ done ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ done ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ done ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [ done ] You are now ready to build this project with your preferred IDE
- [ done ] Implement the project on your Branch, committing changes regularly.
- [ done ] Push commits: git push origin `<firstName-lastName>`.



### Task 2 - Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

#### Task A: Objects and Arrays

Test your knowledge of advanced array methods and callbacks.
* [ ] Use the [arrays-callbacks.js](challenges/arrays-callbacks.js) link to get started.  Read the instructions carefully!

#### Task B: Closure

This challenge takes a look at closures as well as scope. 
* [ ] Use the [closure.js](challenges/closure.js) link to get started. Read the instructions carefully!

#### Task C: Prototypes

Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

#### Task D: Classes

Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3 - Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!

## Submission Format

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your team lead as a Reviewer on the Pull-request
- [ ] TL then will count the HW as done by  merging the branch back into master.
