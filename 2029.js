/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function(stones) {
  return play(0, 0, stones);

  function play(steps, sum, stones) {
    console.log(steps, sum, stones);
    if (stones.length === 1) {
      sum += stones[0];
      if (sum % 3) return false;
      else return steps % 2 === 1;
    } else {
      for (let i = 0; i < stones.length; i++) {
        const otherWin = play(steps + 1, sum + stones[i], [
          ...stones.slice(0, i),
          ...stones.slice(i + 1),
        ]);
        if (!otherWin) return true;
      }
    }
  }
};