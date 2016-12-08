/*
 * Return the length of the longest word in the provided sentence.
 * Your response should be a number.
*/

function findLongestWord(str) {
  str = str.split(' ');
  var len = 0;
  str.forEach(function(string){
    if(string.length > len) len = string.length;
  });
  return len;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
