/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
  const ans = [];
  for (let i = 0, j = 0; i < firstList.length && j < secondList.length;) {
    const [start1, end1] = firstList[i], [start2, end2] = secondList[j];
    if (start1 > end2) {
      j++;
    } else if (start2 > end1) {
      i++;
    } else if (start1 <= start2 && end1 >= end2) {
      ans.push([start2, end2]);
      j++;
    } else if (start2 <= start1 && end2 >= end1) {
      ans.push([start1, end1]);
      i++;
    } else if (end1 <= end2) {
      ans.push([start2, end1]);
      i++;
    } else if (end2 <= end1) {
      ans.push([start1, end2]);
      j++;
    }
  }
  return ans;
};