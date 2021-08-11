/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
  const count0 = [0];
  for (let i = 0, c0 = 0; i < s.length; i++) {
    if (s[i] === '0') c0++;
    count0[i + 1] = c0;
  }

  let min = Infinity;
  for (let i = 0; i <= s.length; i++) {
    // Should have (i) 0s in the front.
    const c0front = count0[i]; // Alrady have (count0[i]) 0s in the front.
    const flip0 = i - c0front; // Need to flip (i - count0[i]) 1s to 0s in the front.

    // Should have (s.length - i) 1s after 0s.
    const flip1 = count0[s.length] - c0front; // Have (count0[s.length] - c0front) 0s in the back, they all need to be flip to 1.
    const flips = flip0 + flip1;
    if (flips < min) min = flips;
  }
  return min;
};