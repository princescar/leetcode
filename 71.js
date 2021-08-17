/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const stack = [];
  for (const x of path.split('/')) {
    if (x === '') continue;
    else if (x === '.') continue;
    else if (x === '..') stack.pop();
    else stack.push(x);
  }
  return '/' + stack.join('/');
};