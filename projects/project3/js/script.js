"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

const NOTE_TEMPO = 500;

let cFlatMajor = [
//  493.88, 466.16, 415.30, 369.99, 329.63, 311.13, 277.18, 246.94
];

let gFlatMajor = [
//  369.99, 349.23, 311.13, 277.18, 246.94, 233.08,	207.65, 185.00
];

let dFlatMajor = [
//  277.18, 261.63, 233.08, 207.65, 185.00, 174.61, 155.56, 138.59
];

let aFlatMajor = [
//  415.30, 392.00, 349.23, 311.13, 277.18, 261.63, 233.08, 207.65
];

let eFlatMajor = [
//  311.13, 293.66, 261.63, 233.08, 207.65, 196.00, 174.61, 155.56
];

let bFlatMajor = [
//  466.16, 440.00, 392.00, 349.23, 311.13, 293.66, 261.63, 233.08
];

let fMajor = [
//  349.23, 329.63, 293.66, 261.63, 233.08, 220.00, 196.00, 174.61
];

let cMajor = [
//  261.63, 246.94, 220.00, 196.00, 174.61, 164.81, 146.83, 130.81
];

let gMajor = [
//  392.00, 369.99, 329.63, 293.66, 261.63, 246.94, 220.00, 196.00
];

let dMajor = [
//  293.66, 277.18, 246.94, 220.00, 196.00, 185.00, 164.81, 146.83
];

let aMajor = [
//  440.00, 415.30, 369.99, 329.63, 293.66, 277.18, 246.94, 220.00
];

let eMajor = [
//  329.63, 311.13, 277.18, 246.94, 220.00, 207.65, 185.00, 164.81
];

let bMajor = [
//  493.88, 466.16, 415.30, 369.99, 329.63, 311.13, 261.63, 246.94
];

let fSharpMajor = [
//  369.99, 349.23, 311.13, 277.18, 246.94, 233.08, 207.65, 185.00
];

let cSharpMajor = [
//  277.18, 261.63, 233.08, 207.65, 185.00, 174.61, 155.56, 138.59
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

//temporary freq

let frequencies = [
  220,246.94,277.18,293.66,329.63,369.99,415.30
];

let currentScale = 8;
let effectInterval;
let effectGain = 0;
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

  var distortion = new Pizzicato.Effects.Distortion({
    gain: effectGain
});

synth.addEffect(distortion);

  let sphere = document.getElementById("goodsphere");
  sphere.addEventListener('mouseenter', function() {
 effectInterval = setInterval(function () {
  let gain = effectGain += 0.2;
  distortion.gain = gain;
  console.log(effectGain);
 },500);
    console.log("Array + 1");
   interval = setInterval(playNote,NOTE_TEMPO);
});

let sphere2 = document.getElementById("badsphere");
sphere2.addEventListener('mouseenter', function() {
 effectInterval = setInterval(function () {
  let gain = effectGain -= 0.2;
  distortion.gain = gain;
  console.log(effectGain);
 },500);
console.log(effectGain);
  console.log("Array - 1");
 interval = setInterval(playNote,NOTE_TEMPO);
});

sphere.addEventListener('mouseleave', function() {
console.log("Left");
clearInterval(effectInterval);
pauseNote();
});


sphere2.addEventListener('mouseleave', function() {
console.log("Left");
clearInterval(effectInterval);
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
