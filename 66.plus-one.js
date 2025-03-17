/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// Array/push, Array/join

// @lc code=start

/**
 * @param {number[]} digits
 * @return {number[]}
 */

/*
var plusOne = function (digits) {
  let num = Number(digits.join(""));
  num += 1;
  return num.toString().split("").map(Number);
};
*/

/*
var plusOne = function (digits) {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] += carry;
    carry = Math.floor(digits[i] / 10);
    digits[i] %= 10;
  }
  if (carry === 1) {
    digits.unshift(carry);
  }
  return digits;
};
*/

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] + 1 != 10) {
      digits[i] += 1;
      return digits;
    }
    digits[i] = 0;

    if (i === 0) {
      digits.unshift(1);
    }
  }
  return digits;
};

// @lc code=end
