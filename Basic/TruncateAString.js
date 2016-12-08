/*
 * Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
 * Return the truncated string with a ... ending.
 *
 * However, if the given maximum string length num is less than or equal to 3,
 * then the addition of the three dots does not add to the string length in determining the truncated string.
 */
function truncateString(str, num) {
  var newArr = [];
  if (num >= str.length) {
    return str;
  } else if (num < 3) {
    for (var i = 0; i < num; i++) {
      newArr.push(str[i]);
    }
  } else {
    for (var j = 0; j <= num - 3; j++) {
      newArr.push(str[j]);
    }
  }

  return newArr.join('').replace(/\s$/, '') + '...';
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
