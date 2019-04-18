"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

const NOTE_TEMPO = 500;

let cFlatMajor = [

];

let gFlatMajor = [

];

let dFlatMajor = [

];

let aFlatMajor = [

];

let eFlatMajor = [

];

let bFlatMajor = [

];

let fMajor = [

];

let cMajor = [
  261.63, 246.94, 220.00, 196.00, 174.61, 164.81
];

let gMajor = [

];

let dMajor = [

];

let aMajor = [

];

let eMajor = [

];

let bMajor = [

];

let fSharpMajor = [

];

let cSharpMajor = [

];

let scaleKeys = [
  cFlatMajor,
  gFlatMajor,
  dFlatMajor,
  aFlatMajor,
  eFlatMajor,
  bFlatMajor,
  fMajor,
  cMajor,
  gMajor,
  dMajor,
  aMajor,
  eMajor,
  bMajor,
  fSharpMajor,
  cSharpMajor
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

  let sphere = document.getElementById("goodsphere");
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
