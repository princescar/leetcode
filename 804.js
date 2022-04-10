/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const codes = [
    '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', 
    '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', 
    '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'
  ];
  const set = new Set();
  const A = 'a'.charCodeAt(0);
  for (const word of words) {
    let encoded = '';
    for (let i = 0; i < word.length; i++) {
      const index = word.charCodeAt(i) - A;
      encoded += codes[index];
    }
    set.add(encoded);
  }
  return set.size;
};
