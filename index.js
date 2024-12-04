// Question 11:

// L0 - Convert to Arrow Function with Default Parameters

const multiply = (a = 1, b = 1) => {
  return a * b;
};

// Example Input (with defaults):
console.log(multiply()); //1

// Example Output (with defaults):
console.log(multiply(3, 4)); //12
