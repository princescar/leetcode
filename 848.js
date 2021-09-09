/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
  const A = 'a'.charCodeAt(0);
  let str = '', x = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    x += shifts[i] % 26;
    x %= 26;
    const y = (s.charCodeAt(i) - A + x) % 26;
    const ch = String.fromCharCode(A + y);
    str = ch + str;
  }
  return str;
};