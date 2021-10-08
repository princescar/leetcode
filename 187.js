/**
 * @param {string} s
 * @return {string[]}
 */
 var findRepeatedDnaSequences = function(s) {
  const ans = new Set(), set = new Set();
  for (let i = 0; i < s.length - 9; i++) {
    const str = s.substr(i, 10);
    if (set.has(str)) ans.add(str);
    else set.add(str);
  }
  return [...ans];
};