/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
  const total = chalk.reduce((s, x) => s + x, 0);
  k = k % total;
  for (let i = 0; i < chalk.length; i++) {
    if (k < chalk[i]) return i;
    else k -= chalk[i];
  }
};