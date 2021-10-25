/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function(sentence) {
  let ans = 0;
  for (const token of sentence.split(' ')) {
    if (
      token.length > 0 &&
      token.search(/[0-9]/) < 0 &&
      !token.startsWith('-') &&
      !token.endsWith('-') &&
      (!token.match(/-/g) || token.match(/-/g).length === 1 && token.match(/[a-z]-[a-z]/g)) &&
      token.substr(0, token.length - 1).search(/[!.,]/) < 0
    ) ans++;
  }
  return ans;
};