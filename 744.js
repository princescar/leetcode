/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  if (letters[letters.length - 1] < target) return letters[0];
  for (const x of letters)
    if (x > target) return x;
  return letters[0];
};