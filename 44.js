/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let si = pi = 0;
  let back = star = -1;
  while (si < s.length) {
    if (s[si] === p[pi] || p[pi] === '?') {
      si++;
      pi++;
    } else if (p[pi] === '*') {
      // Remember the star position and tried position.
      // Suppose the star match 0 letters,
      // and try to match the followings.
      back = si;
      star = pi;
      pi++;
    } else if (back >= 0) {
      // Increase last tried position by 1.
      // Back si to the last tried position.
      // Back pi to the next position of star.
      // Then re-match the followings.
      back++;
      si = back;
      pi = star + 1;
    } else {
      // Either pi runs the end,
      // or both s[si] and p[pi] are english letters but not the same,
      //   and there is no star tried before so no chance to re-match.
      return false;
    }
  }
  // si runs out.
  // Either there is no any p left to match,
  // or the rest of p is all stars (which all match 0 letters).
  return p.slice(pi).split('').every(x => x === '*');
};