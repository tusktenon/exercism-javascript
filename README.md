# JavaScript on Exercism: My Solutions

These are my solutions to the exercises of the [JavaScript track](https://exercism.org/tracks/javascript) on [Exercism](https://exercism.org).


## Completing Exercises

Remember to do an initial commit after downloading the exercise.


## Learning Exercises

These are completed during the JavaScript's track's "Learning Mode" to illustrate important language [concepts](https://exercism.org/tracks/javascript/concepts). They're invariably short and simple, and there generally aren't too many reasonable ways to solve them, but they can provide nice examples of JavaScript features and built-in functions. Because each learning exercise is associated with one or more language concepts, I've listed them all below.

### Amusement Park

`null` and `undefined`, the optional chaining operator `?.` and the nullish coalescing operator `??`.

### Annalyn's Infiltration

Booleans and logical operators.

### Bird Watcher

`for` loops and the increment/decrement operators.

### Coordinate Transformation

Closures, including a nice example of memoization.

### Custom Signs

Template strings and the ternary operator.

### Elyses Analytic Enchantments

Arrow functions and `Array` analysis methods (`includes`, `indexOf`, `every`, `some`, `find`, `findIndex`).

### Elyses Destructured Enchantments

Array destructuring and the rest and spread operators (`...`).

### Elyses Enchantments

Arrays and basic `Array` methods (`push`, `pop`, `shift`, `unshift`, `splice`)

### Elyses Looping Enchantments

Array iteration options: the `for` and `for...of` loops and `forEach` method.

Apparently, the two loop options are around three times faster than `forEach`.

### Elyses Transformative Enchantments

Array transformation methods, both non-mutating (`map`, `flatMap`, `filter`, `reduce`) and mutating (`reverse`, `splice`, `sort`).

### Factory Sensors

Inheritance and error handling.

### Freelancer Rates

Numbers and arithmetic operators.

### Fruit Picker

Basic callbacks.

### High Score Board

Objects.

### Lasagna Master

An introduction to functions. I'm rather fond of my implementation of the `quantities` function.

### Lucian's Luscious Lasagna

The very first exercise in Learning Mode, covering the basics: assignment with `let` and `const`; function declarations; exposing a public API with `export`.

### Lucky Numbers

Type conversion and type coercion, including truthy/falsy values.

### Mixed Juices

`while` loops and `switch` statements.

### Ozan's Playlist

Sets. In most programming languages, you can deduplicate an array by converting it to a set and then back again, but the syntax is especially nice in JavaScript.

### Pizza Order

Recursion. The `orderPrice` function explores stack overflow: one of the test cases is so large that a recursive solution will exceed the maximum call stack size. I wrote a tail-recursive implementation of `orderPrice` as well, but this doesn't solve the problem: tail call optimization is part of the ECMAScript 6 specification, but the V8 JavaScript engine (and hence Node.js) does not implement it.

### Poetry Club Door Policy

Strings and string methods.

### Regular Chatbot

Regular expressions.

### Translation Service

Promises.

### Vehicle Purchase

Conditionals (`if` statements) and comparisons. Although it's jumping ahead a little, I completed this exercise with the ternary operator (`?:`) instead of `if` statements. In general, I prefer to use the ternary operator whenever I can: unlike `if` and `switch` *statements*, it returns an *expression* that can be directly assignment to a variable or returned from a function.

### Windowing System

Classes and methods defined using both the older prototype syntax and the newer class syntax.


## Practice Exercises

These are meant for students who've completed Learning Mode or otherwise acquired basic language proficiency, and vary considerably in length and difficulty. Unlike the learning exercises, the list below is not exhaustive.

### Bob

More regular expression practice. Also, `switch (true)` can be [a succinct alternative](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#an_alternative_to_if...else_chains) to an `if...else` chain.

### Book Store

A tricky problem that can be solved with recursion. `Array` transformation methods (`map`, `filter`, `reduce`, `sort`) allow for a fairly concise solution.

### Gigasecond

A simple introduction to `Date` objects.

### Pangram

Four possible solutions using `Array` methods, a `Set`, or a bit field.
