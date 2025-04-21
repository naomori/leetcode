#
# @lc app=leetcode id=88 lang=python3
#
# [88] Merge Sorted Array
#
# begin concatinating the nums2 into the end of nums1, and sort().
#
#   nums1: [1, 2, 3, 0, 0, 0]
#            nums2: [7, 8, 9]
#
# time complexity: O((n + m)log(n + m)) -> quick sort?
# space complexity: O(1)

# @lc code=start
class Solution:
    def merge(self, nums1: list[int], m: int, nums2: list[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        nums1[m:] = nums2[:]
        nums1.sort()

# @lc code=end

