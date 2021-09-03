/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
  bookings.sort((a, b) => a[0] * 10000 + a[1] - b[0] * 10000 + b[1]);
  const ans = new Array(n).fill(0);
  let i = 0; j = 0;
  return ans;
};