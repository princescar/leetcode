/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
  let i = 0;
  for (const n of data) {
    const s = n.toString(2).padStart(8, '0');
    if (i === 0) {
      if (s[0] === '0') i = 0;
      else if (s[1] === '1' && s[2] === '0') i = 1;
      else if (s[1] === '1' && s[2] === '1' && s[3] === '0') i = 2;
      else if (s[1] === '1' && s[2] === '1' && s[3] === '1' && s[4] === '0') i = 3;
      else return false;
    } else {
      if (s[0] === '1' && s[1] === '0') i--;
      else return false;
    }
  }
  return i === 0;
};
