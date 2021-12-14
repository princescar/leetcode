/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  return ip(0, 0);

  function ip(n, i) {
    if (n === 3) {
      if (i === s.length - 1) {
        return [s.substring(i)]
      } else {
        if (s[i] === '0') return [];
        if (parseInt(s.substring(i)) < 256) return [s.substring(i)];
        else return [];
      }
    }
    const ans = [];
    ans.push(...ip(n + 1, i + 1).map(x => s.substr(i, 1) + '.' + x));
    if (s[i] !== '0') {
      ans.push(...ip(n + 1, i + 2).map(x => s.substr(i, 2) + '.' + x));
      if (parseInt(s.substr(i, 3)) < 256) {
        ans.push(...ip(n + 1, i + 3).map(x => s.substr(i, 3) + '.' + x));
      }
    }
    return ans;
  }
};