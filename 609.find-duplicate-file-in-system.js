/*
 * @lc app=leetcode id=609 lang=javascript
 *
 * [609] Find Duplicate File in System
 * time complexity: O(n * x)
 * space complexity: O(n * x)
 */

// @lc code=start
/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
  const d = new Map();
  for (const p of paths) {
    const [root, ...fs] = p.split(" ");
    for (const f of fs) {
      const [name, content] = f.split(/\(|\)/g).filter(Boolean);
      const t = d.get(content) ?? [];
      t.push(root + "/" + name);
      d.set(content, t);
    }
  }
  return [...d.values()].filter((e) => e.length > 1);
};
// @lc code=end
