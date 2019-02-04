describe('squareDancer', function () {

  var squareDancer;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    squareDancer = new BlueSquareDancer(20, 40, timeBetweenSteps);
  });

  it('should have a different top and left after calling step function twice', function () {
    expect(squareDancer.top).to.equal(20);
    expect(squareDancer.left).to.equal(40);
    squareDancer.step();
    squareDancer.step();
    expect(squareDancer.top).to.not.equal(20);
    expect(squareDancer.left).to.not.equal(40);
  });

  it('should have additional properties', function () {
    expect(squareDancer.lineup).to.exist;
    expect(squareDancer.danceduo).to.exist;
  });
});