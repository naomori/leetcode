/*
 * @lc app=leetcode id=1603 lang=javascript
 *
 * [1603] Design Parking System
 */

class Car {
  constructor(type, limit, next) {
    this.type = type;
    this.limit = limit;
    this.num = 0;
    this.next = next;
  }
}

// @lc code=start
/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  this.size = 1997;
  this.multi = 104729;
  this.map = new Array(this.size).fill(null);
  this.newCar(1, big);
  this.newCar(2, medium);
  this.newCar(3, small);
};

ParkingSystem.prototype.newCar = function (carType, limit) {
  let hash = this.hash(carType);
  let car = this.search(hash);
  if (car) {
    return;
  }
  if (this.map[hash]) {
    this.map[hash] = new Car(carType, limit, this.map[hash].next);
  } else {
    this.map[hash] = new Car(carType, limit, null);
  }
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  let hash = this.hash(carType);
  let car = this.search(hash);
  if (car) {
    if (car.num == car.limit) {
      return false;
    } else {
      car.num += 1;
      return true;
    }
  } else {
    return false;
  }
};

ParkingSystem.prototype.hash = function (carType) {
  return (carType * this.multi) % this.size;
};

ParkingSystem.prototype.search = function (hash) {
  let car = this.map[hash];
  if (!car) {
    return null;
  }
  if (car.type === carType) {
    return car;
  } else {
    for (; car.next.next; car = car.next) {
      if (car.type === carType) {
        return car;
      }
      car.next = car.next.next;
    }
  }
  return null;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
// @lc code=end
