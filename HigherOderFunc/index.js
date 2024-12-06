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

//-------------------------

// Question 14:
// L1 - Employee Performance Evaluation System

let employeeData = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },

  { name: "Bob", tasksCompleted: 4, rating: 4.0 },

  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },

  { name: "David", tasksCompleted: 10, rating: 4.9 },

  { name: "Eve", tasksCompleted: 7, rating: 2.8 },
];
function evaluateEmployee(employeeData) {
  let filteredEmployees = employeeData.filter(
    (employee) => employee.tasksCompleted > 5
  );

  let empAndPerformance = filteredEmployees.map((emp) => {
    let PerformanceLvl;

    if (emp.rating > 4.5) {
      PerformanceLvl = "Excellent";
    } else if (emp.rating >= 3 && emp.rating <= 4.5) {
      PerformanceLvl = "Good";
    } else {
      PerformanceLvl = "Needs Improvement";
    }

    return { name: emp.name, performance: PerformanceLvl };
  });

  let sortedEmployees = empAndPerformance.sort((a, b) => {
    const performanceOrder = { Excellent: 3, Good: 2, "Needs Improvement": 1 };
    return performanceOrder[b.performance] - performanceOrder[a.performance];
  });
  return sortedEmployees;
}

console.log(evaluateEmployee(employeeData)); //[
//     { name: 'Alice', performance: 'Excellent' },
//     { name: 'David', performance: 'Excellent' },
//     { name: 'Charlie', performance: 'Good' },
//     { name: 'Eve', performance: 'Needs Improvement' }
//   ]
