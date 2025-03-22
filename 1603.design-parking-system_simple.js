/*
 * @lc app=leetcode id=1603 lang=javascript
 *
 * [1603] Design Parking System
 */

// @lc code=start
/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  this.big = 0;
  this.medium = 0;
  this.small = 0;
  this.big_capacity = big;
  this.medium_capacity = medium;
  this.small_capacity = small;
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  switch (carType) {
    case 1:
      if (this.big == this.big_capacity) {
        return false;
      }
      this.big += 1;
      return true;
    case 2:
      if (this.medium == this.medium_capacity) {
        return false;
      }
      this.medium += 1;
      return true;
    case 3:
      if (this.small == this.small_capacity) {
        return false;
      }
      this.small += 1;
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
