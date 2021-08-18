/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const arr = s.split('');
  const vowel = x => 'aeiouAEIOU'.indexOf(x) >= 0;
  const swap = (i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
  let l = 0, r = arr.length - 1;
  while (l < r) {
    if (!vowel(arr[l])) l++;
    else if (!vowel(arr[r])) r--;
    else swap(l++, r--);
  }
  return arr.join('');
};