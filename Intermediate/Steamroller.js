/*
 * Flatten a nested array. You must account for varying levels of nesting.
 */

 function steamrollArray(arr) {
   var flattened = [];
   var flatten = function(val) {
     if (Array.isArray(val)) {
      val.forEach(function(x) {
        flatten(x);
      });
     }
     else flattened.push(val);
   };

   arr.forEach(flatten);
   return flattened;
 }

 steamrollArray([1, [2], [3, [[4]]]]);
