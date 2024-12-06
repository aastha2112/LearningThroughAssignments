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

const squareAndCube = (num) =>
  console.log({ square: num ** 2, cube: num ** 3 });

squareAndCube(5); //{ square: 25, cube: 125 }

// -------------------------------------

// Question 13:
// L1 - Multi-Level Array and Object Destructuring

const people = [
  {
    name: "Alice",
    address: {
      city: "New York",
      street: { name: "Broadway", number: 123 },
    },
  },
  {
    name: "Bob",
    address: {
      city: "Los Angeles",
      street: { name: "Sunset Boulevard", number: 456 },
    },
  },
];

const result = people.map(
  ({
    name,
    address: {
      city,
      street: { name: streetName },
    },
  }) => {
    return `${name} lives in ${city} on ${streetName}`;
  }
);

console.log(result); //["Alice lives in New York on Broadway", "Bob lives in Los Angeles on Sunset Boulevard"]

// -------------------------------------

// Question 14:
// L1 - Merging and Updating Nested Objects with Spread Operator

const profile = {
  name: "Charlie",
  age: 29,
  address: {
    city: "San Francisco",
    zipcode: "94101",
  },
};

const updates = {
  age: 30,
  address: {
    zipcode: "94109",
    country: "USA",
  },
};

const mergedObj = {
  ...profile,
  ...updates,
  address: {
    ...profile.address,
    ...updates.address,
  },
};

console.log(mergedObj); //{ name: "Charlie", age: 30,address: { city: "San Francisco", zipcode: "94109", country: "USA"}}
