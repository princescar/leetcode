/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
  const [year, month, day] = date.split('-').map(x => parseInt(x));
  let ans = day;
  for (let i = 1; i < month; i++) ans += getDays(year, i);
  return ans;

  function getDays(year, month) {
    if (month === 2) return isLeapYear(year) ? 29 : 28;
    else if (month < 8) return month % 2 ? 31 : 30;
    else return month % 2 ? 30 : 31;
  }

  function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year === 2000;
  }
};