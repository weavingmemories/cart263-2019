"use strict";

/*****************

Eat Up
Pippin Barr

Using jQuery UI's draggable and droppable methods to
feed a hungry mouth!

Sounds:
Buzzing: https://freesound.org/people/soundmary/sounds/194931/
Chewing: https://freesound.org/people/InspectorJ/sounds/412068/

******************/

// Sound effects for the experience
let buzzSFX = new Audio("assets/sounds/buzz.mp3");
let crunchSFX = new Audio("assets/sounds/crunch.wav");
let yeehawSFX = new Audio("assets/sounds/yeehaw.wav");

// Variable to hold our two key elements
let $mouth;
let $lovey;
let $sadyeehaw;

// Variable holds mouthtimer

let mouthtimer;

$(document).ready(setup);

function setup() {
  // Get the mouth element from the page
  $mouth = $('#mouth');
  // Make it droppable
  $mouth.droppable({

    // The drop option specifies a function to call when a drop is completed
    drop: flyDropped
  });

  // Get the lovey element from the page
  $lovey = $('#lovey');
  // Make it draggable
  $lovey.draggable();
  // Get the lovey element from the page
  $sadyeehaw = $('#sadyeehaw');
  // Make it draggable
  $sadyeehaw.draggable({
    revert: "valid",
    start: function( event, ui ) {
      yeehawSFX.play();
    }
  });

  $sadyeehaw.draggable({

  });

  // Start up the buzzing of the lovey
  buzzSFX.loop = true;
  buzzSFX.play();
}

// loveyDropped(event,ui)
//
// Called when a draggable element is dragged over the droppable element (the mouth)
// In this instance it can only be the lovey (it's the only draggable element).
// The arguments 'event' and 'ui' are automatically passed by jQuery UI and contain
// helpful information about the event.
function flyDropped (event,ui) {

  if (event.toElement === document.getElementById('lovey')) {
    // When we drop the lovey into the mouth we should remove the lovey from the page
    // ui contains a reference to the draggable element that was just dropped in ui.draggable
    // .remove() removes the select element from the page
    ui.draggable.remove(); // $lovey.remove() would work here too

    // We should "close the mouth" by changing its image
    // .attr() lets us change specific attributes on HTML element by specifying the attribute
    // and then what we want to set it to - in this case the 'src' attribute to the closed image
    $(this).attr('src','assets/images/mouth-closed.png');
    // Now the lovey is gone we should stop its buzzing
    buzzSFX.pause();
    // And start the crunching sound effect of chewing
    crunchSFX.play();
    // Use a setInterval to call the chew() function over and over
    mouthtimer = setInterval(chew,250);
      setTimeout(function () {
        clearInterval(mouthtimer);
      }, 1000)
  }

  if (event.toElement === document.getElementById('sadyeehaw')) {

   addDialog();
  }

}

function addDialog () {

}


// chew()
//
// Swaps the mouth image between closed and open and plays the crunching SFX
function chew () {
  // We can use .attr() to check the value of an attribute to
  // In this case we check if the image is the open mouth
  if ($mouth.attr('src') === 'assets/images/mouth-open.png') {
    // If it is, we set the 'src' attribute to the closed mouth
    $mouth.attr('src','assets/images/mouth-closed.png');
    // and play the crunching
    crunchSFX.play();
  }
  else {
    // Otherwise the 'src' attribute must have been the closed mouth
    // so we swap it for the open mouth
    $mouth.attr('src','assets/images/mouth-open.png');
  }
}
