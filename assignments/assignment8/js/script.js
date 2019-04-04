"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

const NOTE_TEMPO = 500;

let frequencies = [
  220,246.94,277.18,293.66,329.63,369.99,415.30
];

let synth;
let interval;

$(document).ready(setup);

function setup() {
  synth = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'sine',
      frequency: 220
    }
  });

  let sphere = document.getElementById("sphere");
  sphere.addEventListener('mouseenter', function() {
    console.log("Clicked");
   interval = setInterval(playNote,NOTE_TEMPO);
});

sphere.addEventListener('mouseleave', function() {
console.log("Left");
pauseNote();
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

function pauseNote() {
  clearInterval(interval);
  synth.stop();
}
