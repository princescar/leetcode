/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  const states = [
    { 'sign': 1, 'digit': 2, 'dot': 4 },     // start
    { 'digit': 2, 'dot': 4 },                // decimal sign
    { 'digit': 2, 'dot': 3, 'exponent': 6 }, // decimal whole
    { 'digit': 5, 'exponent': 6 },           // decimal dot
    { 'digit': 5 },                          // decimal dot only factional
    { 'digit': 5, 'exponent': 6 },           // decimal fractional
    { 'sign': 7, 'digit': 8 },               // exponential separator
    { 'digit': 8 },                          // exponential sign
    { 'digit': 8 },                          // exponential number
  ];

  let cur = 0;
  for (let i = 0; i < s.length; i++) {
    const t = getType(s[i]);
    const next = states[cur][t];
    if (next == null) return false;
    cur = next;
  }
  return [2,3,5,8].includes(cur);

  function getType(c) {
    if (c === '+' || c === '-') return 'sign';
    if (c === '.') return 'dot';
    if (c === 'e' || c === 'E') return 'exponent';
    const x = c.charCodeAt(0) - '0'.charCodeAt(0);
    if (x >= 0 && x <= 9) return 'digit';
  }
};