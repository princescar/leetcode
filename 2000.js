/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
  const index = word.indexOf(ch);
  if (index < 0) return word;
  const first = word.slice(0, index + 1).split('').reverse().join('');
  const last = word.slice(index + 1);
  return first + last;
};