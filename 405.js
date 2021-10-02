/**
 * @param {number} num
 * @return {string}
 */
 var toHex = function(num) {
  if (num === 0) return '0';
  let ans = [], x = Math.abs(num);
  while (x > 0) {
    ans.unshift(x & 0xf);
    x >>>= 4;
  }
  if (num < 0) {
    while(ans.length < 8) ans.unshift('0');
    for (let i = 0; i < 8; i++) ans[i] ^= 0xf;
    for (let i = ans.length - 1; i >= 0; i--) {
      const x = ans[i] + 1;
      ans[i] = x & 0xf;
      if (x < 16) break;
    }
  }
  return ans.map(x => x > 9 ? 'abcdef'[x - 10] : x).join('');
};