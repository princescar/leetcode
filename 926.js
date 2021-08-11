/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
  const count0 = [];
  count0[s.length] = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    count0[i] = count0[i + 1];
    if (s[i] === '0') count0[i]++;
  }
  return flip(0);

  function flip(start) {
    if (start >= s.length) return 0;
    let i = start;
    while (s[i] === '0') i++;
    let j = i;
    while (s[j] === '1') j++;
    return Math.min((j - i) + flip(j), count0[j]);
  }
};