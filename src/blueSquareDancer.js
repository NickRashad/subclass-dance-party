var BlueSquareDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.direction = 0;
  this.$node = $('<span class="blueSquareDancer"></span>');
};

BlueSquareDancer.prototype = Object.create(MakeDancer.prototype);
BlueSquareDancer.prototype.constructor = BlueSquareDancer;

BlueSquareDancer.prototype.step = function () {
  MakeDancer.prototype.step.call(this);
  if (this.direction === 0) {
    this.direction = 1;
    this.top = this.top + 10;
  } else if (this.direction === 1) {
    this.direction = 2;
    this.left = this.left + 10;
  } else if (this.direction === 2) {
    this.direction = 3;
    this.top = this.top - 10;
  } else if (this.direction === 3) {
    this.direction = 0;
    this.left = this.left - 10;
  }

  var styleSettings = {
    top: this.top,
    left: this.left
  };

  this.$node.css(styleSettings);

};