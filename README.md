# Unexpected Behavior with Null Parameters in JavaScript Function

This repository demonstrates an uncommon JavaScript bug related to unexpected behavior when null values are passed as parameters to a function.

## Bug Description

The `foo()` function is designed to add two numbers. However, it does not handle null values correctly. When either or both parameters are null, the function does not throw an error but returns `undefined` instead of gracefully handling the null case, for example by returning 0 or throwing an error.

## Bug Solution

The `bugSolution.js` file provides a corrected version of the `foo()` function that explicitly checks for null values and handles them appropriately by returning 0 in such cases.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` to observe the buggy and corrected code, respectively.
3. Run the JavaScript code in a browser's developer console or a Node.js environment.

## Learning Points

This example showcases the importance of robust error handling in JavaScript functions, especially when dealing with potentially null or undefined values.  Proper null checks and the use of appropriate return values or exceptions can make code more predictable and less prone to unexpected behavior.