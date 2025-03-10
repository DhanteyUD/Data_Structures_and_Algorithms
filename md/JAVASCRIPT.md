## 1. What is a `Closure`?

> A closure is a function that retains its lexical scope ( the scope in which it was created ) even after the outer function has finish executing.

```javascript
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
```

## 2. What is a `Pure Function`?

> A pure function is a function that always gives the same output for the same input. It does not depend on any external state or mutable data.

```javascript
const multiply = (a, b) => a * b;

console.log(multiply(2, 3)); // Always outputs 6
```

## 3. What is `Function Composition`?

> Function composition is the process of combining two or more functions to produce a new function or perform some computation. 

> `Note:` The output of one function becomes the input of the next function. It's like chaining functions together.
