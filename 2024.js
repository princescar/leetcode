/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
  let i = 0, j = 0, queue = [];
  while (queue.length < k && i < answerKey.length) {
    if (answerKey[i] === 'F') queue.push(i);
    i++;
  }
  let max = i - j;
  while (i < answerKey.length) {
    if (answerKey[i] === 'T') i++;
    else if (queue.length < k) {
      queue.push(i);
      i++;
    } else {
      const next = queue.shift();
      j = next + 1;
    }
    max = Math.max(max, i - j);
  }
  i = 0, j = 0, queue = [];
  while (queue.length < k && i < answerKey.length) {
    if (answerKey[i] === 'T') queue.push(i);
    i++;
  }
  max = Math.max(max, i - j);
  while (i < answerKey.length) {
    if (answerKey[i] === 'F') i++;
    else if (queue.length < k) {
      queue.push(i);
      i++;
    } else {
      const next = queue.shift();
      j = next + 1;
    }
    max = Math.max(max, i - j);
  }

  return max;
};