$(document).ready(function() {
  window.dancers = [];

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

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var top = $('body').height() * Math.random();
    var left = $('body').width() * Math.random();
    var dancer = new dancerMakerFunction(top, left, Math.random() * 1000);
    var styleSettings = {
      top: top,
      left: left
    };
    dancer.$node.css(styleSettings);
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineup').on('click', function(event) {
    var topSpacing = 50;
    window.dancers.forEach(element => {
      clearTimeout(element.step());
      element.setPosition(topSpacing, 25);
      topSpacing = topSpacing + 50;
      element.lineup = true;
    });
  });

  $('.revert').on('click', function(event) {
    window.dancers.forEach(element => {
      element.setPosition(element.top, element.left);
      element.lineup = false;
      element.danceduo = false;
    });
  });

  $('.DancePartner').on('click', function(event) {
    var midTop = ($('body').height() * Math.random()) / 2;
    var midLeft = ($('body').width() * Math.random()) / 2;
    var dancer1ind = Math.floor(window.dancers.length * Math.random());
    var dancer1 = window.dancers[dancer1ind];
    var dancer2;
    var minDist = 99000;
    window.dancers.forEach(element => {
      var distance = calculateDistance(
        element.top,
        element.left,
        dancer1.top,
        dancer1.left
      );
      if (distance < minDist && distance !== 0) {
        minDist = distance;
        dancer2 = element;
      }
    });

    dancer1.setPosition(midTop, midLeft - 15);
    dancer2.setPosition(midTop, midLeft + 15);
    dancer1.danceduo = true;
    dancer2.danceduo = true;
    $(dancer1).addClass('rotate');
    $(dancer2).addClass('rotate');
  });

  $('.blueSquareDancer').on('mouseover', event => {
    debugger;
    $(event.currentTarget).addClass('.greenSquareDancer');
  });

  $('span').on('mouseover', function(event) {
    //var divName = $(this).data("id");
    //$('#' + divName).fadeIn();
    //$(event.currentTarget).hide();
    //$('span').css('border', '20px solid green');
  });

  $('.yellowBouncyDancer').on('mouseleave', function(event) {
    $(event.currentTarget).show();
  });
});

var calculateDistance = function(x1, y1, x2, y2) {
  return Math.round(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)), 2);
};
