/**
 * @param {string} word
 * @return {number}
 */
var countVowels = function(word) {
  let ans = 0, count = 0;
  for (let i = 0; i < word.length; i++) {
    if (/^[aeiou]$/.test(word[i])) count += i + 1;
    ans += count;
  }
  return ans;
};