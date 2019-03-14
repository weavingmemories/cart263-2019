"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

Project Checklist:

1. Import all images. Display hand. Finger images in an array per finger.
2. When appropriate voice command goes off (pinky, thumb, etc) randomize and
   pick another one from that specific array. Then, add probability of 'creepier'
   finger subset of appearing to that function.

******************/

let thumb = [

];

let index = [

];

let middle = [

];

let ring = [

];

let pinky = [

];

$(document).ready(setup);

function setup() {
  /*
  if (annyang) {
    var commands = {
      'pinky': randomPinky();,
      'ring': randomRing();,
      'middle': randomMiddle();,
      'index': randomIndex();,
      'thumb': randomThumb();
    };
    // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
  }
  */

}

randomPinky() {
  console.log("Pinky randomized.");
  pinkyImage = pinky[Math.floor(Math.random() * pinky.length)];
  document.getElementById("pinky").src = "assets/images/pinky" + pinkyImage + ".png";
}

randomRing() {
  console.log("Ring randomized.");
  ringImage = ring[Math.floor(Math.random() * ring.length)];
  document.getElementById("ring").src = "assets/images/ring" + ringImage + ".png";
}

randomMiddle() {
  console.log("Middle randomized.");
  middleImage = middle[Math.floor(Math.random() * middle.length)];
  document.getElementById("middle").src = "assets/images/middle" + middleImage + ".png";
}

randomIndex() {
  console.log("Index randomized.");
  indexImage = index[Math.floor(Math.random() * index.length)];
  document.getElementById("index").src = "assets/images/index" + indexImage + ".png";
}

randomThumb() {
  console.log("Thumb randomized.");
  thumbImage = thumb[Math.floor(Math.random() * thumb.length)];
  document.getElementById("thumb").src = "assets/images/thumb" + thumbImage + ".png";
}

// example code for updating images
/*
for (var i = 0; i < boldStuffs.length; i += 1) {
    var fruit = getRandomItem(fruitsArray);
    boldStuffs[i].innerHTML = fruit.name + '<img src="'+fruit.image+'">';
}
*/
