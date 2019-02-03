var YellowBouncyDancer = function (top, left, timeBetweenSteps) {
  timeBetweenSteps = 800;
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="yellowBouncyDancer" src="cheese.png"></img>');
};

YellowBouncyDancer.prototype = Object.create(MakeDancer.prototype);
YellowBouncyDancer.prototype.constructor = YellowBouncyDancer;

YellowBouncyDancer.prototype.step = function () {
  MakeDancer.prototype.step.call(this);
  this.left = this.left + 10;
  if (this.left > $("body").width()) {
    this.left = 0;
  }
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);

};