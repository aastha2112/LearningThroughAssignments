// Question 19:
// Title: L0 - Understanding Global and Function Execution Context

// Problem Statement: You are tasked with creating two functions, one in the global execution context and another inside a function context. In this problem, you need to:

// Define a global variable age.
// Create a function displayAge that prints the value of the age variable.
// Call the displayAge function to show how the global execution context works.
// Additionally, create another function changeAge that updates the global age variable within the function, and print the value of age after updating it.

// Steps:

// Declare a global variable age and assign a value to it.

// Create a function displayAge that logs the value of age.

// Create a second function changeAge, which changes the value of age.

// Call displayAge and changeAge and check how the value of age is updated.

let age = 22;
function displayAge() {
  console.log(`Global age is ${age}`);
}
displayAge();

function changeAge(newAge) {
  age = newAge;

  console.log(`Updated age is ${age}`);
}
changeAge(40);
console.log(age); //updated value of global variable : 40

//---------------------------

//Question 20:
//Question 1: Closure-Based Counter Implementation

function createCounter() {
  let count = 0;
  return {
    increment() {
      count++;
      console.log(`Current count: ${count}`);
    },
    decrement() {
      count--;
      console.log(`Current count: ${count}`);
    },
  };
}

let counter = createCounter();
counter.increment(); //Current count: 1
counter.increment(); //Current count: 2
counter.decrement(); //Current count: 1

//Encapsulation of count: The count variable is declared inside createCounter and is not directly accessible from outside. When createCounter is called, it returns an object with the methods increment, decrement, and display. These methods form closures that retain access to the count variable, even after the execution of createCounter is complete.
let counter1 = createCounter();
let counter2 = createCounter();

console.log("if multiple counters are created using the same function");

counter1.increment(); // 1
counter1.decrement(); // 0
counter2.decrement(); // -1
counter2.increment(); // 0
counter2.increment(); //1
counter2.increment(); //2

// Each closure has its own copy of the count variable, so operations on counter1 do not interfere with counter2.

//-----------

//Question 2: Simulating Private Variables with Closures

function createBankAccount() {
  let money = 0;
  let transactionHistory = [];
  return {
    deposit(amount) {
      money += amount;
      transactionHistory.push({ type: "Deposit", amount });
      console.log(`Deposited: ${amount}`);
    },
    withdraw(withdrawlAmount) {
      if (withdrawlAmount > money) {
        console.log(`Insufficient balance`);
      } else {
        money -= withdrawlAmount;
        transactionHistory.push({ type: "Withdrawl", withdrawlAmount });

        console.log(`Withdrawn: ${withdrawlAmount}`);
      }
    },
    CheckBalance() {
      console.log(`Current Balance is ${money}`);
    },
    getTransactionHistory() {
      console.log("Transaction History:", transactionHistory);
    },
  };
}

const account = createBankAccount();
account.deposit(500); //Output: Deposited: 500
account.withdraw(200); // Output: Withdrawn: 200
account.withdraw(400); // Output: Insufficient balance

console.log(account.balance); //undefined
account.CheckBalance(); //Current Balance is 300
account.getTransactionHistory(); //Transaction History: [{ type: 'Deposit', amount: 500 },{ type: 'Withdrawl', withdrawlAmount: 200 }]
