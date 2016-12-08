/*
 * Repeat a given string (first argument) num times (second argument).
 * Return an empty string if num is not a positive number.
 */

function repeatStringNumTimes(str, num) {
  var str2 = '';
  for(var i=0; i<num; i++){
    str2 += str;
  }
  return str2;
}

repeatStringNumTimes("abc", 3);
