/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  if (word.length === 1) return true;
  const isUpperCase = ch => ch.charCodeAt(0) <= 'Z'.charCodeAt(0);
  let allShouldBeUpper = false;
  if (isUpperCase(word[0])) {
    if (isUpperCase(word[1])) allShouldBeUpper = true;
  } else {
    if (isUpperCase(word[1])) return false;
  }
  for (let i = 2; i < word.length; i++) {
    if (allShouldBeUpper && !isUpperCase(word[i])) return false;
    if (!allShouldBeUpper && isUpperCase(word[i])) return false;
  }
  return true;
};