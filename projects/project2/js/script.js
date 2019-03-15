"use strict";

/*****************

Finger Family Fun! Elsa Anna Spiderman Batman Joker Superheroes In Real Life
by Macey McCormick

Say the name of any finger to randomly generate a new finger family member!

******************/

// Creating arrays of images for each finger

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

// The setup function starts us off with a randomly generated hand, and activates
// annyang's voice commands.

function setup() {
  startup();

  if (annyang) {
    var commands = {
      'pinky': randomPinky,
      'ring': randomRing,
      'middle': randomMiddle,
      'index': randomIndex,
      'thumb': randomThumb
    };

    annyang.addCommands(commands);

    // Start listening for a voice.
    annyang.start();
  }
}

/*
I tried to generalize everything into one function, but unfortunately this didn't work.
Please let me know what I was missing! Here is the raw code:

function randomDigit(digitName,digitArray) {
  console.log("Digit randomized.");
  let image = digitArray[Math.floor(Math.random() * digitArray.length)];
  document.getElementById(digitName).src = "assets/images/" + image;
  if (digitName = pinky || index) {
  let temporaryArray = [digitName + "3.png", digitName + "4.png"]
  let creepyImage = temporaryArray[Math.floor(Math.random() * temporaryArray.length)];
  digitArray.push(creepyImage);
}
}
*/

// These functions each pick out a random item out of their respective digit's array,
// and replace the current image with it. They also add another 'creepy' image into
// the array every time the function is called, so slowly over time, the creepier images
// will become more and more common.

function randomPinky() {
  console.log("Pinky randomized.");
  pinkyImage = pinky[Math.floor(Math.random() * pinky.length)];
  document.getElementById("pinky").src = "assets/images/" + pinkyImage;
  let temporaryArray = ["pinky3.png", "pinky4.png"]
  let creepyImage = temporaryArray[Math.floor(Math.random() * temporaryArray.length)];
  pinky.push(creepyImage);
}

function randomRing() {
  console.log("Ring randomized.");
  ringImage = ring[Math.floor(Math.random() * ring.length)];
  document.getElementById("ring").src = "assets/images/" + ringImage;
  ring.push("ring3.png");
}

function randomMiddle() {
  console.log("Middle randomized.");
  middleImage = middle[Math.floor(Math.random() * middle.length)];
  document.getElementById("middle").src = "assets/images/" + middleImage;
  middle.push("middle3.png");
}

function randomIndex() {
  console.log("Index randomized.");
  indexImage = index[Math.floor(Math.random() * index.length)];
  document.getElementById("index").src = "assets/images/" + indexImage;
  let temporaryArray = ["index3.png", "index4.png"]
  let creepyImage = temporaryArray[Math.floor(Math.random() * temporaryArray.length)];
  index.push(creepyImage);
}

function randomThumb() {
  console.log("Thumb randomized.");
  thumbImage = thumb[Math.floor(Math.random() * thumb.length)];
  document.getElementById("thumb").src = "assets/images/" + thumbImage;
  thumb.push("thumb4.png");
}

// When the function is called in setup, it randomly generates every finger.

function startup() {
  randomPinky();
  randomRing();
  randomMiddle();
  randomIndex();
  randomThumb();
}
