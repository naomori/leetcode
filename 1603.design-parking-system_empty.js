/*
 * @lc app=leetcode id=1603 lang=javascript
 *
 * [1603] Design Parking System
 * time complexity: O(1)
 * space complexity: O(1)
 */

// @lc code=start
/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  this.empty = [big, medium, small];
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  if (this.empty[carType - 1] > 0) {
    this.empty[carType - 1] -= 1;
    return true;
  }
  return false;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
// @lc code=end
