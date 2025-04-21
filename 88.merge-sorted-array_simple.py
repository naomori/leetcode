#
# @lc app=leetcode id=88 lang=python3
#
# [88] Merge Sorted Array
#
# begin comparing with from the end of nums1 and from the end of nums2.
#
# input example 1: nums1[m - 1] > nums2[0] and nums1[m - 1] < nums2[n - 1]
#   nums1: [1, 2, 3, 0, 0, 0], nums2: [2, 5, 6]
# input example 2: nums1[0] > nums2[n - 1]
#   nums1: [7, 8, 9, 0, 0, 0], nums2: [1, 2, 3]
# input example 3: nums1[m - 1] < nums2[0]
#   nums1: [1, 2, 3, 0, 0, 0], nums2: [7, 8, 9]
#
# time complexity: O(n * m)
# space complexity: O(1)

# @lc code=start
class Solution:
    def merge(self, nums1: list[int], m: int, nums2: list[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        mi = m - 1
        ni = n - 1
        me = m + n - 1
        while ni >= 0:
            if mi >= 0 and nums1[mi] > nums2[ni]:
                nums1[me] = nums1[mi]
                mi -= 1
            else:
                nums1[me] = nums2[ni]
                ni -= 1
            me -= 1

# @lc code=end
