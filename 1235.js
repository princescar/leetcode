/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
  const jobs = startTime.map(
    (s, i) => [s, endTime[i], profit[i]]
  ).sort((a, b) => a[0] - b[0]);
  const dp = [];
  return work(0);

  function work(i) {
    if (i === jobs.length) return 0;
    if (dp[i] != null) return dp[i];
    const [, end, profit] = jobs[i];
    let l = i, r = jobs.length - 1;
    while (l < r) {
      const mid = Math.floor((l + r) / 2);
      if (jobs[mid][0] < end) l = mid + 1;
      else r = mid;
    }
    let max = Math.max(work(i + 1), profit);
    if (jobs[r][0] >= end) {
      const p = profit + work(r);
      if (p > max) max = p;
    }
    dp[i] = max;
    return max;
  }
};