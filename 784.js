/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
  if (s.length === 0) return [''];
  const next = letterCasePermutation(s.substring(1));
  if (
    s.charCodeAt(0) >= '0'.charCodeAt(0) &&
    s.charCodeAt(0) <= '9'.charCodeAt(0)
  ) {
    return next.map(x => s[0] + x);
  } else {
    return [
      ...next.map(x => s[0].toLowerCase() + x),
      ...next.map(x => s[0].toUpperCase() + x)
    ];
  }
};