/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  if (num === 0) return 'Zero';
  const suffix = ['', 'Thousand', 'Million', 'Billion'];
  const single = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tys = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const arr = [];
  let i = 0;
  while (num > 0) {
    const x = num % 1000;
    if (x > 0) {
      if (i > 0) arr.unshift(suffix[i]);
      arr.unshift(...spell(x));
    }
    i++;
    num = Math.floor(num / 1000);
  }
  return arr.join(' ');

  function spell(x) {
    const arr = [];
    const a = Math.floor(x / 100);
    if (a > 0) {
      arr.push(single[a])
      arr.push('Hundred');
    }
    const b = x % 100;
    if (b === 0) {
      // Do nothing.
    } else if (b < 10) {
      arr.push(single[b]);
    } else if (b < 20) {
      arr.push(teens[b - 10]);
    } else {
      arr.push(tys[Math.floor(b / 10)]);
      const c = b % 10;
      if (c > 0) arr.push(single[c]);
    }
    return arr;
  }
};