/*
 * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
 * In a shift cipher the meanings of the letters are shifted by some set amount.
 * A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
 *
 * Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 * All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 */

function rot13(str) { // LBH QVQ VG!
  var codes = [];
  console.log(str);
  for(var i=0; i<str.length; i++){
    codes.push(str.charCodeAt(i) - 13);
  }
  str = '';
  for (var j=0; j<codes.length; j++){
    str += String.fromCharCode(codes[j]);
  }
  console.log(str);
  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
