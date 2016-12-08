/*
 * Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
 * For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  var strArray = [];
  str.split(" ").forEach(function (element){
    var first = element.substr(0,1).toUpperCase();
    var rest = element.substr(1).toLowerCase();
    strArray = strArray.concat(first.concat(rest));
  });
  return strArray.join(" ");
}

titleCase("I'm a little tea pot");
