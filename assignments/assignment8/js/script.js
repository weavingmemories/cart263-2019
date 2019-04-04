"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let frequencies = [
  220,246.94,277.18,293.66,329.63,369.99,415.30
];

let synth;

function setup() {
  synth = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'sine',
      frequency: 220
    }
  });
}

function playNote() {
  // Pick a random frequency from the array
  let frequency = frequencies[Math.floor(Math.random() * frequencies.length)];
  // Set the synth's frequency
  synth.frequency = frequency;
  // If it's note already play, play the synth
  synth.play();
}
