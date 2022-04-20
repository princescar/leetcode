/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
  const arr = input.split('\n').map(process);
  const stack = [];
  let ans = 0;
  for (const { depth, isFile, length } of arr) {
    while (depth < stack.length) stack.pop();
    if (isFile) {
      const len = stack.reduce((s, x) => s + x + 1, 0) + length;
      ans = Math.max(ans, len);
    } else {
      stack.push(length);
    }
  }
  return ans;

  function process(line) {
    let depth = 0;
    for (; depth < line.length; depth++)
      if (line[depth] !== '\t') break;
    const length = line.length - depth;
    const isFile = line.indexOf('.') > -1;
    return { depth, isFile, length };
  }
};
