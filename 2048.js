/**
 * @param {number} n
 * @return {number}
 */
var nextBeautifulNumber = function(n) {
  let x = n + 1;
  while (true) {
    if (valid(x)) return x;
    x++;
  }
  
  function valid(x) {
    const count = [];
    while (x > 0) {
      const d = x % 10;
      count[d] = (count[d] || 0) + 1;
      if (count[d] > d) return false;
      x = Math.floor(x / 10);
    }
    for (let i = 0; i < 10; i++) {
      if (count[i] == null) continue;
      if (count[i] !== i) return false;
    }
    return true;
  }
};

console.log(nextBeautifulNumber(188));