/**
 * @param {string} order
 * @param {string} str
 * @return {string}
 */
var customSortString = function(order, str) {
  const count = new Map();
  const each = Array.prototype.forEach
  each.call(order, c => count.set(c, 0));
  each.call(str, c => {
    const n = count.get(c);
    if (n != null) {
      count.set(c, n + 1);
    }
  });
  let result = str;
  each.call(order.split('').reverse().join(''), c => {
    const n = count.get(c);
    console.log(c, n, result);
    const regex = new RegExp(c, 'g');
    result = c.repeat(n) + result.replace(regex, '');
  });
  return result;
};