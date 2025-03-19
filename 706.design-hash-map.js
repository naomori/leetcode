/*
 * @lc app=leetcode id=706 lang=javascript
 *
 * [706] Design HashMap
 */

// @lc code=start

var MyHashMap = function () {
  this.data = new Array(1000000);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  this.data[key] = value;
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  let val = this.data[key];
  if (val === undefined) {
    return -1;
  } else {
    return val;
  }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  delete this.data[key];
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end
