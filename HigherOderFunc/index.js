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
