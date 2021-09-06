/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
  let max = 0, key = '', prev = 0;
  for (let i = 0; i < releaseTimes.length; i++) {
    const t = releaseTimes[i] - prev;
    if (t > max) {
      max = t;
      key = keysPressed[i];
    } else if (t === max && keysPressed[i] > key) {
      key = keysPressed[i];
    }
    prev = releaseTimes[i];
  }
  return key;
};