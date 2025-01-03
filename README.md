# JavaScript on Exercism: My Solutions

These are my solutions to the exercises of the [JavaScript track](https://exercism.org/tracks/javascript) on [Exercism](https://exercism.org).


## Completing Exercises

- Remember to do an initial commit after downloading the exercise.
- Copy over your `.prettier.yaml` file from a previous exercise.
- Install any dependencies needed to run the tests. Exercism recommends using [pnpm](https://pnpm.io/) to save disk space (most of the exercises have the same dependencies). Within the exercise directory, run
    - `pnpm install` if you've installed `pnpm` with a package manager like Homebrew, or
    - `corepack pnpm install` to let Node.js manage your `pnpm` installation.
- Invoke strict mode by adding `'use strict'` to the start of the solution file. (I'm not sure if this is actually necessary: the solution file is imported as a module by the test script, and modules are always executed in strict mode.)
- Once you think you have a working solution, verify with `npm test`. 

### Handling Multiple Solutions

I often like to write several solutions to an exercise. If I'm only writing multiple implementations for one or two functions, I'll just include the alternatives as (unexported) functions in the same file; the exported function is then just used as a wrapper to select one of the options:
```javascript
export function requiredFunction(x, y) {
    // select an implementation
    // return requiredFunction1(x, y)
    // return requiredFunction2(x, y)
    return requiredFunction3(x, y)
}
```
If the exercise involves writing a class with a number of methods, I place each implementation in its own file. To select a particular implementation for testing, there are several approaches.

As an example, consider the Linked List exercise. The first line of the testing script, `linked-list.spec.js`, attempts to import a class called `LinkedList` from a file named `linked-list.js`:
```javascript
import { LinkedList } from './linked-list'
```
My three solutions to the exercise are in the files `original.js`, `sentinel.js` and `elegant.js`.

- *Option 1.* Just symlink the desired solution to `linked-list.js`. This is a fairly robust, language-agnostic approach that works for most of the Exercism language tracks. You may want to add the link target `(linked-list.js` in this case) to an exercise-level `.gitignore` file.

- *Option 2.* Replace the first line of the test script as needed. In this case, you'd write something like
    ```javascript
    // Select an implementation:
    // import { LinkedList } from './original';
    // import { LinkedList } from './sentinel';
    import { LinkedList } from './elegant';
    ```

- *Option 3.* Write a `linked-list.js` file that simple reexports the desired solution:
    ```javascript
    // Select an implementation:
    // export { LinkedList } from './original';
    // export { LinkedList } from './sentinel';
    export { LinkedList } from './elegant';
    ```
    If you want to publish all of your implementations on Exercism, this is the best choice. As with Option 1, you may want to add a `.gitignore` file containing `linked-list.js`.


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

### Grade School

There's a very nice, functional implementation of the `grade` method. It's a bit of a judgment call as to whether the `#students` field should be a simple object or a `Map`.

I chose to store students as keys and grades as values, which makes the `add` method short and efficient, but the `roster` and `grade` methods slower and more involved. Most community solutions went with the opposite approach.

### Linked List
A classic doubly linked list, suitable for use as a deque. I wrote several versions, with and without sentinel nodes. This exercise presents a perfect opportunity to use private fields and methods, which are relatively recent additions to the language.

### Pangram

Four possible solutions using `Array` methods, a `Set`, or a bit field.
