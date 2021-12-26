/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
  const arr = text.split(' '), ans = [];
  for (let i = 0; i < arr.length - 2; i++)
    if (arr[i] === first && arr[i + 1] === second)
      ans.push(arr[i + 2]);
  return ans;
};