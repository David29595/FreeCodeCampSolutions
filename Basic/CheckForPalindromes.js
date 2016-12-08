/*
 * Return true if the given string is a palindrome. Otherwise, return false.
 * A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
 * You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
*/

function palindrome(str) {
  str = str.replace(/[\W_]+/g,"").toLowerCase();
  var str2 = str.split('').reverse().join('');
  return str === str2;
}

palindrome("eye");
