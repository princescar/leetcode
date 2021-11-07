/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
  let ans = 0;
  for (let i = 0; i < word.length - 4; i++) {
    let flag = 0;
    for (let j = i; j < word.length; j++) {
      if (word[j] === 'a') flag |= 1;
      else if (word[j] === 'e') flag |= 2;
      else if (word[j] === 'i') flag |= 4;
      else if (word[j] === 'o') flag |= 8;
      else if (word[j] === 'u') flag |= 16;
      else break;
      if (flag === 31) ans++;
    }
  }
  return ans;
};
