/*
 * We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
 * The lowest number will not always come first.
 */

function sumAll(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  console.log(min + " " +  max);
  var i = min;
  var sum = 0;
  while(i >= min && i <= max){
    sum += i;
    i++;
  }
  return sum;
}

sumAll([1, 4]);
