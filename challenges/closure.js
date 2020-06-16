// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// Because it's a function within a function AKA Clousure. It is not "technically" looking outside into the global scope. **********************

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */


const summation = (sum) => {  // Was trying two different ways... arrow function way and regular function way **********************
  let list = 0;       // Setting my baselne here **********************
  while (sum > 0) {    //   I want my argument to be bigger than 0  **********************
    list += sum--;      // Using the math tools  **********************
  }
  return list
}
console.log(summation(12)) // I let sum be 12 


// function summation (sum) {
//   var list = [];
//   for (var i = sum[0]; i <= sum[1]; i++) {
//     list.push(i);
//   }
//   var total = list.reduce(function(a, b) {
//     return a+b;
//   });
//   return total;
// }
// summation([10, 5])