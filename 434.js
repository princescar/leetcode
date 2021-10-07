/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  let ans = 0, i = 0, flag = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      flag = true;
    } else {
      if (flag) ans++;
      flag = false;
    }
  }
  if (flag) ans++;
  return ans;
};