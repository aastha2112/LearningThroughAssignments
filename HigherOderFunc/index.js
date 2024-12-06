// Question 11 :
// L0 - Transforming and Filtering with map() and forEach()

let arr = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 },
];

function processProducts(arr) {
  let productnames = arr.map((product) => product.name);
  arr.forEach((product) => {
    if (product.price > 50) {
      console.log(`${product.name} is above $50`);
    } else {
      console.log(`${product.name} is below $50`);
    }
  });
}

processProducts(arr);

//----------------------

// Question 12:
// L0 - Filter and Sort Data with Higher-Order Functions

function processStudents(array) {
  let scoreAbove60 = array.filter((obj) => {
    if (obj.marks > 60) {
      return obj;
    }
  });
  scoreAbove60.sort((stu1, stu2) => stu2.marks - stu1.marks);
  let sortedNames = scoreAbove60.map((student) => student.name);
  return sortedNames;
}

let arrOfStudents = [
  { name: "Alice", marks: 58 },

  { name: "Bob", marks: 85 },

  { name: "Charlie", marks: 92 },

  { name: "David", marks: 45 },
];

console.log(processStudents(arrOfStudents));

//-------------------------

// Question 13:
// L1 - Grouping and Summing with reduce()

let category = [
  "electronics",
  "clothing",
  "electronics",
  "toys",
  "clothing",
  "toys",
  "toys",
];

let resultObj = category.reduce((acc, elm) => {
  if (acc[elm]) {
    acc[elm]++;
  } else {
    acc[elm] = 1;
  }
  return acc;
}, {});

console.log(resultObj); //{ electronics: 2, clothing: 2, toys: 3 }

function arrayOfSortedcategories(Obj) {
  let sortedArray = Object.entries(Obj)
    .sort((a, b) => b[1] - a[1])
    .map((elm) => elm[0]);

  return sortedArray;
}
console.log(arrayOfSortedcategories(resultObj)); //[ 'toys', 'electronics', 'clothing' ]
