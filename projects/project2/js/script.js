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
{ name: 'greygirl', image: 'thumb_01_greygorl.png' },
{ name: 'thumper', image: 'thumb_02_thumper.png' },
{ name: 'minion', image: 'thumb_03_minion.png' },
{ name: 'vampelsa', image: 'thumb_04_vampelsa.png' },
{ name: 'peppa', image: 'thumb_05_peppa.png' }
];

let index = [
  { name: 'ariel', image: 'index_01_ariel.png' },
  { name: 'aurora', image: 'index_02_aurora.png' },
  { name: 'joker1', image: 'index_03_joker.png' },
  { name: 'robbermickey', image: 'index_04_robbermickey.png' },
  { name: 'batman', image: 'index_05_batman.png' }
];

let middle = [
  { name: 'blueboy', image: 'middle_01_blueboy.png' },
  { name: 'mickey', image: 'middle_02_mickey.png' },
  { name: 'injuredelsa', image: 'middle_03_injureelsa.png' },
  { name: 'pinkie', image: 'middle_04_pinkie.png' },
  { name: 'tiana', image: 'middle_05_tiana.png' }
];

let ring = [
  { name: 'creepybaby', image: 'ring_01_creepybaby.png' },
  { name: 'rainbowdash', image: 'ring_02_rainbowdash.png' },
  { name: 'joker2', image: 'ring_03_creepyjoker.png' },
  { name: 'unicorn', image: 'ring_04_unicorn.png' },
  { name: 'anna', image: 'ring_05_anna.png' }
];

let pinky = [
  { name: 'greenkid', image: 'pinkie_01_greenkid.png' },
  { name: 'spiderman', image: 'pinkie_02_spiderman.png' },
  { name: 'zombiepeppa', image: 'pinkie_03_creepypeppa.png' },
  { name: 'lethalmickey', image: 'pinkie_04_lethalmickey.png' },
  { name: 'pawpatrol', image: 'pinkie_05_paw.png' }
];

$(document).ready(setup);

function setup() {
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

}

randomPinky() {
  console.log("Pinky randomized.");
}

randomRing() {
  console.log("Ring randomized.");
}

randomMiddle() {
  console.log("Middle randomized.");
}

randomIndex() {
  console.log("Index randomized.");
}

randomThumb() {
  console.log("Thumb randomized.");
}

// example code for updating images
/*
for (var i = 0; i < boldStuffs.length; i += 1) {
    var fruit = getRandomItem(fruitsArray);
    boldStuffs[i].innerHTML = fruit.name + '<img src="'+fruit.image+'">';
}
*/
