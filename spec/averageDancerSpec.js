describe('AverageDancer', function() {

  var averageDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    averageDancer = new AverageDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(averageDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(averageDancer.$node, 'toggle');
    averageDancer.step();
    expect(averageDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(averageDancer, 'step');
      expect(averageDancer.step.callCount).to.be.equal(0);

      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(averageDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(averageDancer.step.callCount).to.be.equal(2);
    });
  });
});

