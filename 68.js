/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  const result = [];
  let line = [], wordLen = 0;
  for (let i = 0; i < words.length; i++) {
    const need = words[i].length + (line.length > 0 ? 1 : 0);
    if (need <= maxWidth - wordLen - line.length + 1) {
      line.push(words[i]);
      wordLen += words[i].length;
    } else {
      if (line.length === 1) {
        result.push(line[0].padEnd(maxWidth));
      } else {
        const n = Math.floor((maxWidth - wordLen) / (line.length - 1));
        const k = (maxWidth - wordLen) % (line.length - 1);
        result.push(line.map((w, j) =>
          ' '.repeat(j === 0 ? 0 : (j <= k ? n + 1 : n)) + w
        ).join(''));
      }
      required = wordLen = 0;
      line = [];
      i--;
    }
  }
  if (line.length > 0) result.push(line.join(' ').padEnd(maxWidth));
  return result;
};