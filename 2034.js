
var StockPrice = function() {
  this.latestTime = -1;
  this.latestPrice = -1;
  this.timeMap = new Map();
  this.priceMap = new Map();
};

/** 
 * @param {number} timestamp 
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function(timestamp, price) {
  if (timestamp >= this.latestTime) {
    this.latestTime = timestamp;
    this.latestPrice = price;
  }
  if (this.timeMap.has(timestamp)) {
    const oldPrice = this.timeMap.get(timestamp);
    if (oldPrice === price) return;
    this.priceMap.get(oldPrice).delete(timestamp);
    if (this.priceMap.get(oldPrice).size === 0)
      this.priceMap.delete(oldPrice);
  }
  this.timeMap.set(timestamp, price);
  if (this.priceMap.has(price)) {
    this.priceMap.get(price).add(timestamp);
  } else {
    this.priceMap.set(price, new Set([timestamp]));
  }
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function() {
  return this.latestPrice;
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function() {
  return Math.max(...this.priceMap.keys());
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function() {
  return Math.min(...this.priceMap.keys());
};

/**
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */