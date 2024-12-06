///////// CLOSURE

function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

let ans = outer();
ans();
ans();
ans();
