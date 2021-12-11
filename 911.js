/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function(persons, times) {
  this.times = times;
  this.winner = [];
  const count = [];
  let max = 0, win = -1;
  for (let i = 0; i < times.length; i++) {
    const p = persons[i];
    count[p] = (count[p] || 0) + 1;
    if (count[p] >= max) {
      max = count[p];
      win = p;
    }
    this.winner[i] = win;
  }
};

/** 
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function(t) {
  let l = 0, r = this.times.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (this.times[mid] < t) l = mid + 1;
    else if (this.times[mid] > t) r = mid - 1;
    else return this.winner[mid];
  }
  return this.winner[r];
};

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */