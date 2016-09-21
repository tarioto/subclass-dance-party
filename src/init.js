$(document).ready(function() {
  window.blinkyDancers = [];
  window.humanDancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
    */


    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // debugger;
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    if (dancerMakerFunctionName === 'AverageDancer') {
      var dancerHeight = $('body').height() * Math.random();
      var dancerWidth = $('body').width() * .4 * Math.random();
    } else if (dancerMakerFunctionName === 'CobraDancer') {
      var dancerHeight = $('body').height() * Math.random();
      var dancerWidth = ($('body').width() * .4 * Math.random()) + ($('body').width() * .60);
    } else if (dancerMakerFunctionName === 'BlinkyDancer') { 
      var dancerHeight = $('body').height() * Math.random();
      var dancerWidth = $('body').width() * .5;
    }

    var dancer = new dancerMakerFunction(dancerHeight, dancerWidth,
      Math.random() * 1000
    );

    $('body').append(dancer.$node);

    if (dancerMakerFunctionName === 'AverageDancer') {
      window.humanDancers.push(dancer.$node);
    } else if (dancerMakerFunctionName === 'CobraDancer') {
      window.humanDancers.push(dancer.$node);
    } else if (dancerMakerFunctionName === 'BlinkyDancer') { 
      window.blinkyDancers.push(dancer.$node);
    }
  });


  $('.throwDodgeballs').on('click', function () {
    window.blinkyDancers.forEach(function(blinkyDancer) {
      blinkyDancer.animate({left: (Math.random() * $('body').width()), top: (Math.random() * $('body').height())}, 400, function () {
        window.humanDancers.forEach(function(humanDancer, averageIndex) {
          var distance = Math.sqrt(Math.pow((blinkyDancer.position().top - humanDancer.position().top), 2) + Math.pow((blinkyDancer.position().left - humanDancer.position().left), 2));
          if (distance < 125) {
            humanDancer.fadeOut();

          }
        });
      });
    } );
  });
});
