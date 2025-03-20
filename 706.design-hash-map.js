/*
 * @lc app=leetcode id=706 lang=javascript
 *
 * [706] Design HashMap
 * time complexity: average O(n), worst case O(n)
 * space complexity: O(n)
 */

// @lc code=start

class Node {
  constructor(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

var MyHashMap = function () {
  this.size = 1997;
  this.multi = 104729;
  this.data = new Array(this.size).fill(null);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  this.remove(key);
  let hash = this.hash(key);
  let node = new Node(key, value, this.data[hash]);
  this.data[hash] = node;
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  let hash = this.hash(key);
  let node = this.data[hash];
  for (; node; node = node.next) {
    if (node.key === key) {
      return node.value;
    }
  }
  return -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  let hash = this.hash(key);
  let node = this.data[hash];
  if (!node) {
    return;
  }
  if (node.key === key) {
    this.data[hash] = node.next;
  } else {
    for (; node.next; node = node.next) {
      if (node.next.key === key) {
        let delete_node = node.next;
        node.next = node.next.next;
        delete delete_node;
        return;
      }
    }
  }
};

/**
 * @param {number} key
 * @return {number} hash value
 */
MyHashMap.prototype.hash = function (key) {
  return (key * this.multi) % this.size;
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end
