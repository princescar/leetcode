/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const chain = [n]
  let x = n;
  while(x !== 1) {
    let y = x, r = 0;
    while(y > 0) {
      r += Math.pow(y % 10, 2);
      y = Math.floor(y / 10);
    }
    if (chain.includes(r)) return false;
    chain.push(x);
    x = r;
  }
  return true;
};