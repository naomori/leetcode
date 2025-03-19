/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 *
 * time complexity: O(m * n)
 * space complexity: O(1)
 */

// @lc code=start
/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let mi = m - 1;
  let ni = n - 1;
  let me = m + n - 1;

  while (ni >= 0) {
    if (mi >= 0 && nums1[mi] > nums2[ni]) {
      nums1[me] = nums1[mi];
      mi--;
    } else {
      nums1[me] = nums2[ni];
      ni--;
    }
    me--;
  }
};
// @lc code=end
