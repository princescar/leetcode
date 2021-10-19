/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let max = 0, maxStr = '';
  for (let i = 0; i < s.length; i++) {
    let k = 0;
    while(true) {
      if (i - k < 0 || i + k >= s.length) break;
      if (s[i - k] !== s[i + k]) break;
      k++;
    }
    if ((k - 1) * 2 + 1 > max) {
      max = (k - 1) * 2 + 1;
      maxStr = s.substring(i - (k - 1), i + (k - 1) + 1);
    }
    k = 0;
    while (true) {
      if (i - k - 1 < 0 || i + k >= s.length) break;
      if (s[i - k - 1] !== s[i + k]) break;
      k++;
    }
    if (k * 2 > max) {
      max = k * 2;
      maxStr = s.substring(i - (k - 1) - 1, i + (k - 1) + 1);
    }
  }
  return maxStr;
};