/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  const count = new Array(10).fill(0);
  let x = 0, y = 0;
  for (const d of secret) ++count[d];
  for (let i = 0; i < guess.length; i++) {
    if (secret[i] === guess[i]) {
      ++x;
      --count[guess[i]];
      if (count[guess[i]] < 0) {
        count[guess[i]] = 0;
        --y;
      }
    } else if (count[guess[i]] > 0) {
      ++y;
      --count[guess[i]];
    }
  }
  return `${x}A${y}B`;
};