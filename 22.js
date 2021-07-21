const cache = [, ['()']];

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (cache[n]) return cache[n];
  const pairs = [];
  pairs.push(...generateParenthesis(n - 1).map(x => '(' + x + ')'));
  for (let i = 1; i <= n - 1; i++) {
    const left = generateParenthesis(i);
    const right = generateParenthesis(n - i);
    left.forEach(x => pairs.push(...right.map(y => x + y)));
  }
  const result = [...new Set(pairs)];
  cache[n] = result;
  return result;
};