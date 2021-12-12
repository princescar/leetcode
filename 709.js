/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
  const A = 'A'.charCodeAt(0), Z = 'Z'.charCodeAt(0);
  const DIFF = 'a'.charCodeAt(0) - A;
  const arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    const x = arr[i].charCodeAt(0);
    if (x >= A && x <= Z) {
      arr[i] = String.fromCharCode(x + DIFF);
    }
  }
  return arr.join('');
};