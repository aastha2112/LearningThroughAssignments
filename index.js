// Question 11:

// L0 - Convert to Arrow Function with Default Parameters

const multiply = (a = 1, b = 1) => {
  return a * b;
};

console.log(multiply()); //1
console.log(multiply(3, 4)); //12

// -------------------------------------

// Question 12:
// L0 - Square and Cube of a Number with Implicit Return
// Write an arrow function that takes a number as input and returns both its square and cube in an object, using implicit return.

const squareAndCube = (num) =>
  console.log({ square: num ** 2, cube: num ** 3 });

squareAndCube(5); //{ square: 25, cube: 125 }
