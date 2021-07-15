/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const letters = [
    [ 'I', 'IV', 'V', 'IX' ],
    [ 'X', 'XL', 'L', 'XC' ],
    [ 'C', 'CD', 'D', 'CM' ],
    [ 'M' ],
  ];

  let str = '';
  let remain = num;
  for (let i = 3; i >= 0; i--) {
    const p = Math.pow(10, i);
    let d = Math.floor(remain / p);
    while(d > 0) {
      if (d >= 9) {
        str += letters[i][3];
        d -= 9;
      } else if (d >= 5) {
        str += letters[i][2];
        d -= 5;
      } else if (d >= 4) {
        str += letters[i][1];
        d -= 4;
      } else {
        str += letters[i][0];
        d -= 1;
      }
    }
    remain %= p;
  }
  return str;
};