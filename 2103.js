/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
  const COLOR_BIT = {
    'R': 1,
    'G': 2,
    'B': 4
  };
  const rods = new Array(10).fill(0);
  for (let i = 0; i < rings.length; i += 2) {
    const color = rings[i], rod = rings[i + 1];
    const bit = COLOR_BIT[color];
    rods[rod] |= bit;
  }
  return rods.filter(x => x === 7).length;
};