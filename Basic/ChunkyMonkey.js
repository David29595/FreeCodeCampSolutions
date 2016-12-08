/*
 * Write a function that splits an array (first argument) into groups the length of size (second argument)
 * and returns them as a two-dimensional array.
 */

function chunkArrayInGroups(arr, size) {
  var arr2 = [];
  for(var i=0; i<arr.length; i+=size){
    arr2.push(arr.slice(i, size+i));
  }
  return arr2;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
