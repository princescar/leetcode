/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
  const arr = s.split('');
  const swap = (i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
  const isLetter = i => arr[i] >= 'a' && arr[i] <= 'z' ||
    arr[i] >= 'A' && arr[i] <= 'Z';
  let l = 0, r = arr.length - 1;
  while (l < r) {
    console.log(arr.join(''), l, r);
    if (!isLetter(l)) l++;
    else if (!isLetter(r)) r--;
    else swap(l++, r--);
  }
  return arr.join('');
};