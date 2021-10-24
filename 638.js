/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function(price, special, needs) {
  const n = price.length;
  special = special.filter(arr => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      if (arr[i] > needs[i]) return false;
      sum += arr[i] * price[i];
    }
    return sum > arr[n];
  });
  return buy(needs);

  function buy(needs) {
    if (needs.some(x => x < 0)) return Infinity;
    if (needs.reduce((s, x) => s + x, 0) === 0) return 0;
    let min = needs.reduce((s, x, i) => s + x * price[i], 0);
    for (const arr of special) {
      const needs2 = [...needs];
      for (let i = 0; i < n; i++) needs2[i] -= arr[i];
      min = Math.min(min, arr[n] + buy(needs2));
    }
    return min;
  }
};