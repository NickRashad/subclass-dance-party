var YellowBouncyDancer = function (top, left, timeBetweenSteps) {
  timeBetweenSteps = 800;
  this.lineup = false;
  this.danceduo = false;
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $(
    '<img class="yellowBouncyDancer" src="cheese.png"></img>'
  );
  this.$node.addClass('mouseOverGrow');
};

YellowBouncyDancer.prototype = Object.create(MakeDancer.prototype);
YellowBouncyDancer.prototype.constructor = YellowBouncyDancer;

YellowBouncyDancer.prototype.step = function () {
  if (!this.lineup && !this.danceduo) {
    MakeDancer.prototype.step.call(this);
    this.left = this.left + 10;
    if (this.left > $('body').width()) {
      this.left = 0;
    }
    var styleSettings = {
      top: this.top,
      left: this.left
    };
    this.$node.css(styleSettings);

    // On mouseover, grow the HR logo size
    var self = this;
    $('.mouseOverGrow').on('mouseover', function () {
      var styleSettings = {
        height: 80,
        width: 80
      };
      self.$node.css(styleSettings);
    });
  }


};
