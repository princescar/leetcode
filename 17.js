/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length === 0) return [];
  const letters = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  }
  return k(digits);

  function k(str) {
    if (str.length === 0) return [''];
    const d = str[0];
    const l = letters[d];
    const p = k(str.slice(1));
    const result = [];
    for (let i = 0; i < l.length; i++) {
      for (let j = 0; j < p.length; j++) {
        result.push(l[i] + p[j]);
      }
    }
    return result;
  }
};