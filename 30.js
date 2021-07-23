/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  const fn = (x, y) => x > y ? 1 : -1;
  const l = words[0].length;
  const n = l * words.length;
  const r = new RegExp(`.{${l}}`, 'g');

  const p = words.sort(fn).join('');

  const result = [];
  for (let i = 0; i < s.length; i++) {
    if (s.length - i < n) break;
    const arr = s.slice(i, i + n).match(r)
    const x = arr.sort(fn).join('');
    if (x === p) result.push(i);
  }
  return result;
};