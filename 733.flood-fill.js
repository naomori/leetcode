/*
 * @lc app=leetcode id=733 lang=javascript
 *
 * [733] Flood Fill
 *
 * time complexity: O(n) -> n is the number of pixels to fill in the image.
 * space complexity: O(n) -> the size of the implicit call stack while caling dfs.
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  let current = image[sr][sc];
  if (current === color) return image;
  dfs(image, sr, sc, current, color);
  return image;

  function dfs(image, r, c, src, dst) {
    if (r < 0 || r >= image.length) return;
    if (c < 0 || c >= image[0].length) return;
    let current = image[r][c];
    if (src != current || current === dst) return;
    image[r][c] = dst;
    dfs(image, r + 1, c, src, dst);
    dfs(image, r - 1, c, src, dst);
    dfs(image, r, c + 1, src, dst);
    dfs(image, r, c - 1, src, dst);
  }
};
// @lc code=end
