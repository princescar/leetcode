/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let i = 0, j = numbers.length - 1;
  while (i < j) {
    const x = numbers[i] + numbers[j];
    if (x === target) break;
    if (x < target) i++;
    else j--;
  }
  return [i + 1, j + 1];
};