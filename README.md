# Factory Functions and The Module Pattern

## Lesson Objectives

1. How to write a factory method that returns an object
2. Explain how "scope" works in JavaScript
3. Explain what "Closure" is and how it impacts private functions & variables
4. Describe how private functions & variables are useful
5. Use "inheritance" in objects using the factory pattern
6. Explain the module pattern
7. Describe IIFE. What does it stand for?
8. Briefly explain namespacing and how it’s useful

### What is Factory Function?

- The factory function pattern is similar to constructors
- Instead of using "new" to create an object, factory functions simply set up and return the new object when you call the function

### Scope and Closure

- scope - refers to where things like variables and functions can be used in your code
- closure - is like a secret hiding spot in the toy box that only the function can access





/* 

Exercise: Scope and Closure 

1. Write a function called `createTemperatureConverter`
2. It takes a temperature in Celsius as an argument and return two functions
3. The first function is the `toFahrenheit` which converts the temperature to fahrenheit
4. The second function is the `toCelsius` which return the celsius


Formula to Fahrenheit: (celsius * 1.8) + 32
*/


