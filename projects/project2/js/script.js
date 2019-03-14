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
  "thumb1.png",
  "thumb1.png",
  "thumb1.png",
  "thumb1.png",
  "thumb2.png",
  "thumb2.png",
  "thumb2.png",
  "thumb2.png",
  "thumb2.png",
  "thumb3.png",
  "thumb3.png",
  "thumb3.png",
  "thumb3.png",
  "thumb3.png",
  "thumb4.png", // creepy
  "thumb5.png",
  "thumb5.png",
  "thumb5.png",
  "thumb5.png",
  "thumb5.png"
];

let index = [
  "index1.png",
  "index1.png",
  "index1.png",
  "index1.png",
  "index1.png",
  "index2.png",
  "index2.png",
  "index2.png",
  "index2.png",
  "index2.png",
  "index3.png", // creepy
  "index4.png", // creepy
  "index5.png",
  "index5.png",
  "index5.png",
  "index5.png",
  "index5.png"
];

let middle = [
  "middle1.png",
  "middle1.png",
  "middle1.png",
  "middle1.png",
  "middle1.png",
  "middle2.png",
  "middle2.png",
  "middle2.png",
  "middle2.png",
  "middle2.png",
  "middle3.png", // creepy
  "middle4.png",
  "middle4.png",
  "middle4.png",
  "middle4.png",
  "middle4.png",
  "middle5.png",
  "middle5.png",
  "middle5.png",
  "middle5.png",
  "middle5.png"
];

let ring = [
  "ring1.png",
  "ring1.png",
  "ring1.png",
  "ring1.png",
  "ring1.png",
  "ring2.png",
  "ring2.png",
  "ring2.png",
  "ring2.png",
  "ring2.png",
  "ring3.png", // creepy
  "ring4.png",
  "ring4.png",
  "ring4.png",
  "ring4.png",
  "ring4.png",
  "ring5.png",
  "ring5.png",
  "ring5.png",
  "ring5.png",
  "ring5.png"
];

let pinky = [
  "pinky1.png",
  "pinky1.png",
  "pinky1.png",
  "pinky1.png",
  "pinky1.png",
  "pinky2.png",
  "pinky2.png",
  "pinky2.png",
  "pinky2.png",
  "pinky2.png",
  "pinky3.png", // creepy
  "pinky4.png", // creepy
  "pinky5.png",
  "pinky5.png",
  "pinky5.png",
  "pinky5.png",
  "pinky5.png"
];

let pinkyImage;
let ringImage;
let middleImage;
let indexImage;
let thumbImage;

$(document).ready(setup);

function setup() {
  startup();
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

function randomPinky() {
  console.log("Pinky randomized.");
  pinkyImage = pinky[Math.floor(Math.random() * pinky.length)];
  document.getElementById("pinky").src = "assets/images/" + pinkyImage;
  pinky.push("pinky");
}

function randomRing() {
  console.log("Ring randomized.");
  ringImage = ring[Math.floor(Math.random() * ring.length)];
  document.getElementById("ring").src = "assets/images/" + ringImage;
}

function randomMiddle() {
  console.log("Middle randomized.");
  middleImage = middle[Math.floor(Math.random() * middle.length)];
  document.getElementById("middle").src = "assets/images/" + middleImage;
}

function randomIndex() {
  console.log("Index randomized.");
  indexImage = index[Math.floor(Math.random() * index.length)];
  document.getElementById("index").src = "assets/images/" + indexImage;
}

function randomThumb() {
  console.log("Thumb randomized.");
  thumbImage = thumb[Math.floor(Math.random() * thumb.length)];
  document.getElementById("thumb").src = "assets/images/" + thumbImage;
}

function startup() {
  randomPinky();
  randomRing();
  randomMiddle();
  randomIndex();
  randomThumb();
}
