/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function (grid) {
  return tree(0, 0, grid.length);

  function tree(i, j, n) {
    if (n === 1) return new Node(grid[i][j], true);
    const m = n / 2;
    const arr = [
      tree(i, j, m),
      tree(i, j + m, m),
      tree(i + m, j, m),
      tree(i + m, j + m, m),
    ];
    if (arr.every((x) => x.isLeaf) && (arr.every((x) => x.val) || arr.every((x) => !x.val)))
      return new Node(arr[0].val, true);
    return new Node(false, false, ...arr);
  }
};
