/*
 * Flatten a nested array. You must account for varying levels of nesting.
 */


function steamrollArray(arr) {
  var flattened = [];
  var flatten = function(x) {
    if (Array.isArray(x)) {
      for (var a in x)
        flatten(x[a]);
    }
    else flattened.push(x);
  };

  arr.forEach(flatten);
  return flattened;
}

steamrollArray([1, [2], [3, [[4]]]]);
