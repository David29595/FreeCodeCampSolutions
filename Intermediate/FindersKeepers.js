/*
 * Create a function that looks through an array (first argument)
 * And returns the first element in the array that passes a truth test (second argument).
 */

function findElement(arr, func) {
  return arr.filter(func).shift();
}

findElement([1, 3, 5, 8, 9, 10], function(num){ return num % 2 === 0; });
