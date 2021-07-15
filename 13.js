/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    let sum = 0;
    let previous = null, current = null;
    for (let i = 0; i < s.length; i++) {
      previous = current;
      current = map[s[i]];
      if (previous < current) {
        // sum -= previous;
        // sum += current - previous;
        sum += current - 2 * previous;
      } else {
        sum += current;
      }
    }
    return sum;
};