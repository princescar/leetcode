/**
 * @param {number} width
 * @param {number} height
 */
var Robot = function(width, height) {
  this.width = width;
  this.height = height;
  this.x = this.y = 0;
  this.direction = 'East';
  this.pendingMove = 0;
};

/** 
 * @param {number} num
 * @return {void}
 */
Robot.prototype.move = function(num) {
  this.pendingMove += num;
};

Robot.prototype.moveEast = function() {
  if (this.pendingMove >= this.width - 1 - this.x) {
    this.pendingMove -= (this.width - 1 - this.x);
    this.x = this.width - 1;
    if (this.pendingMove > this.width - 1 - this.x)
      this.direction = 'North';
  } else {
    this.x += this.pendingMove;
    this.pendingMove = 0;
  }
};

Robot.prototype.moveNorth = function() {
  if (this.pendingMove >= this.height - 1 - this.y ) {
    this.pendingMove -= (this.height - 1 - this.y);
    this.y = this.height - 1;
    if (this.pendingMove > this.height - 1 - this.y)
      this.direction = 'West';
  } else {
    this.y += this.pendingMove;
    this.pendingMove = 0;
  }
};

Robot.prototype.moveWest = function() {
  if (this.pendingMove >= this.x) {
    this.pendingMove -= this.x;
    this.x = 0;
    if (this.pendingMove > this.x)
      this.direction = 'South';
  } else {
    this.x -= this.pendingMove;
    this.pendingMove = 0;
  }
};

Robot.prototype.moveSouth = function() {
  if (this.pendingMove >= this.y) {
    this.pendingMove -= this.y;
    this.y = 0;
    if (this.pendingMove > this.y)
      this.direction = 'East';
  } else {
    this.y -= this.pendingMove;
    this.pendingMove = 0;
  }
};

Robot.prototype.actualMove = function() {
  if (this.pendingMove > (this.width - 1 + this.height - 1) * 2) {
    this.pendingMove %= (this.width - 1 + this.height - 1) * 2;
    if (this.pendingMove === 0) {
      if (this.x === 0 && this.y === 0) this.direction = 'South';
      if (this.x === this.width - 1 && this.y === 0) this.direction = 'East';
      if (this.x === this.width - 1 && this.y === this.height - 1) this.direction = 'North';
      if (this.x === 0 && this.y === this.height - 1) this.direction = 'West';
    }
  }
  while (this.pendingMove) this['move' + this.direction]();
};

/**
 * @return {number[]}
 */
Robot.prototype.getPos = function() {
  this.actualMove();
  return [this.x, this.y];
};

/**
 * @return {string}
 */
Robot.prototype.getDir = function() {
  this.actualMove();
  return this.direction;
};

/**
 * Your Robot object will be instantiated and called as such:
 * var obj = new Robot(width, height)
 * obj.move(num)
 * var param_2 = obj.getPos()
 * var param_3 = obj.getDir()
 */