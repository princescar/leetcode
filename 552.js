/**
- Assume for n - 1 days there are:
  - x eligible records in total.
  - Among which (l0 + l1 + l2 = x):
    - l0 records not late on the last day.
    - l1 records late on the last day and not on the day before.
    - l2 records late on both the last day and the day before.
  - Among which (a0 + a1 = x):
    - a0 records never absent.
    - a1 records absent for only one day (doesn't matter on which day).
  - Those eligible records can be divided into:
    - l0a0 records never absent and not late on the last day.
    - l0a1 records absent once and not late on the last day.
    - l1a0 records never absent and late on the last day and not on the day before.
    - l1a1 records absent once and late on the last day and not on the day before.
    - l2a0 records never absent and late on both the last day and the day before.
    - l2a1 records absent once and late on both the last day and the day before.

- On the n-th day:
  - For those not eligible records:
    - Regardless of the attendance on n-th day, they are still not eligible.
    - We don't care about them.
  - For these eligible records, If the n-th day attendance is:
    - 'Present':
      - p_l0a0 = l0a0 + l1a0 + l2a0
      - p_l0a1 = l0a1 + l1a1 + l2a1
      - p_l1a0 = 0
      - p_l1a1 = 0
      - p_l2a0 = 0
      - p_l2a1 = 0
    - 'Late':
      - l_l0a0 = 0
      - l_l0a1 = 0
      - l_l1a0 = l0a0
      - l_l1a1 = l0a1
      - l_l2a0 = l1a0
      - l_l2a1 = l1a1
    - 'Absent':
      - a_l0a0 = 0
      - a_l0a1 = l0a0 + l1a0 + l2a0
      - a_l1a0 = 0
      - a_l1a1 = 0
      - a_l2a0 = 0
      - a_l2a1 = 0
 */

/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
  const modulo = 1000000007;
  let l0a0 = 1, l0a1 = 1, l1a0 = 1, l1a1 = 0, l2a0 = 0, l2a1 = 0;
  while (--n > 0) {
    const p_l0a0 = l0a0 + l1a0 + l2a0, p_l0a1 = l0a1 + l1a1 + l2a1, p_l1a0 = 0, p_l1a1 = 0, p_l2a0 = 0, p_l2a1 = 0;
    const l_l0a0 = 0, l_l0a1 = 0, l_l1a0 = l0a0, l_l1a1 = l0a1, l_l2a0 = l1a0, l_l2a1 = l1a1;
    const a_l0a0 = 0, a_l0a1 = l0a0 + l1a0 + l2a0, a_l1a0 = 0, a_l1a1 = 0, a_l2a0 = 0, a_l2a1 = 0;
    l0a0 = (p_l0a0 + l_l0a0 + a_l0a0) % modulo;
    l0a1 = (p_l0a1 + l_l0a1 + a_l0a1) % modulo;
    l1a0 = (p_l1a0 + l_l1a0 + a_l1a0) % modulo;
    l1a1 = (p_l1a1 + l_l1a1 + a_l1a1) % modulo;
    l2a0 = (p_l2a0 + l_l2a0 + a_l2a0) % modulo;
    l2a1 = (p_l2a1 + l_l2a1 + a_l2a1) % modulo;
  }
  return (l0a0 + l0a1 + l1a0 + l1a1 + l2a0 + l2a1) % modulo;
};