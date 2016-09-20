describe('CobraDancer', function() {

  var cobraDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    cobraDancer = new CobraDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(cobraDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(cobraDancer.$node, 'toggle');
    cobraDancer.step();
    expect(cobraDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(cobraDancer, 'step');
      expect(cobraDancer.step.callCount).to.be.equal(0);

      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(cobraDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(cobraDancer.step.callCount).to.be.equal(2);
    });
  });
});

