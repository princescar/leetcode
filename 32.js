/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  const open = [], pair = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      open[i] = true;
    } else {
      let j = i - 1;
      while(!open[j] && j >= 0) j--;
      if (j >= 0) {
        pair[i] = true;
        pair[j] = true;
        open[j] = false;
      }
    }
  }
  let max = 0; cur = 0;
  for(let i = 0; i < pair.length; i++) {
    if (pair[i]) cur++;
    else cur = 0;
    if (cur > max) max = cur;
  }
  return max;
};