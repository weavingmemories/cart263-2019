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
"thumb1.png",
"thumb2.png",
"thumb3.png",
"thumb4.png", // creepy
"thumb5.png"
];

let index = [
"index1.png",
"index2.png",
"index3.png", // creepy
"index4.png", // creepy
"index5.png"
];

let middle = [
"middle1.png",
"middle2.png",
"middle3.png", // creepy
"middle4.png",
"middle5.png"
];

let ring = [
"ring1.png",
"ring2.png",
"ring3.png", // creepy
"ring4.png",
"ring5.png"
];

let pinky = [
"pinky1.png",
"pinky2.png",
"pinky3.png", // creepy
"pinky4.png", // creepy
"pinky5.png"
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
  document.getElementById("pinky").src = "assets/images/" + pinkyImage;
}

randomRing() {
  console.log("Ring randomized.");
  ringImage = ring[Math.floor(Math.random() * ring.length)];
  document.getElementById("ring").src = "assets/images/" + ringImage;
}

randomMiddle() {
  console.log("Middle randomized.");
  middleImage = middle[Math.floor(Math.random() * middle.length)];
  document.getElementById("middle").src = "assets/images/" + middleImage;
}

randomIndex() {
  console.log("Index randomized.");
  indexImage = index[Math.floor(Math.random() * index.length)];
  document.getElementById("index").src = "assets/images/" + indexImage;
}

randomThumb() {
  console.log("Thumb randomized.");
  thumbImage = thumb[Math.floor(Math.random() * thumb.length)];
  document.getElementById("thumb").src = "assets/images/" + thumbImage;
}

// example code for updating images
/*
for (var i = 0; i < boldStuffs.length; i += 1) {
    var fruit = getRandomItem(fruitsArray);
    boldStuffs[i].innerHTML = fruit.name + '<img src="'+fruit.image+'">';
}
*/
