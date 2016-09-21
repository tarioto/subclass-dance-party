// var AverageDancer = function(top, left, timeBetweenSteps) {
//   Dancer.call(this, top, left, timeBetweenSteps);
//   this.$node = $('<img src="assets/vince.png"></img>');
//   this.$node.addClass('averageDancer');
//   this.setPosition(top, left);
// };

// AverageDancer.prototype = Object.create(Dancer.prototype);
// AverageDancer.prototype.constructor = AverageDancer;


// // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// // so we must keep a copy of the old version of this function
// AverageDancer.prototype.step = () => {
//   // call the old version of step at the beginning of any call to this new version of step

//   Dancer.prototype.step.call(this);

//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.

//   // this.$node.toggle();
// };

var AverageDancer = class extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node = $('<img src="assets/vince.png"></img>');
    this.$node.addClass('averageDancer');
    this.setPosition(top, left);  
  }
  step() {
    super.step();
  }
};