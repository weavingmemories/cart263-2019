"use strict";

/*****************

Space Jam
Macey McCormick

A musical-spatial experience. Look at the planets; change the music you hear.
Abstractly control tempo, scale, and distortion.
(Works on mobile, too!)

******************/

// Here are all of the scales, and notes (Translated to frequencies) in arrays:

let eFlatMajor = [
  311.13, 293.66, 261.63, 233.08, 207.65, 196.00, 174.61, 155.56
];

let cMajor = [ // default scale
  261.63, 246.94, 220.00, 196.00, 174.61, 164.81, 146.83, 130.81
];

let aMajor = [
  440.00, 415.30, 369.99, 329.63, 293.66, 277.18, 246.94, 220.00
];

let fSharpMajor = [
  369.99, 349.23, 311.13, 277.18, 246.94, 233.08, 207.65, 185.00
];

let eFlatMinor = [
  311.13, 277.18, 246.94, 233.08, 207.65, 185.00, 174.61, 155.56
];

let gMinor = [
  392.00, 349.23, 311.13, 293.66, 261.63, 233.08, 220.00, 196.00
];

// The scale we start with is cMajor.

let currentScale = cMajor;
let effectInterval;
let effectGain = 0;
let synth;
let interval;
let tempo = 500;

$(document).ready(setup);

function setup() {

  // Creating our synth sound.
  synth = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'sine',
      frequency: 220
    }
  });

  // Creating our distortion effect for later.
  var distortion = new Pizzicato.Effects.Distortion({
    gain: effectGain
  });

  synth.addEffect(distortion);

  // This is the 'title' screen. It circumvents music problems on mobile and also
  // just kind of keeps things neat.
  $("#StartButton").click(function() {
    $("#SplashScreen").hide();
    $("#spaceJam").show();
    setTimeout(playNote, tempo);
  });

  // This chunk of code adds event mouse over events to all of the planets.

  let sphere = document.getElementById("addGainPlanet");
  sphere.addEventListener('mouseenter', function() {
    effectInterval = setInterval(function() {
      // This planet adds distortion every half second it is hovered over.
      let gain = effectGain += 0.1;
      distortion.gain = gain;
      console.log(effectGain);
    }, 500);
  });

  sphere.addEventListener('mouseleave', function() {
    console.log("Left");
    clearInterval(effectInterval);
  });

  let sphere2 = document.getElementById("subGainPlanet");
  sphere2.addEventListener('mouseenter', function() {
    effectInterval = setInterval(function() {
      // This planet removes distortion every half second it is hovered over.
      let gain = effectGain -= 0.1;
      distortion.gain = gain;
      console.log(effectGain);
    }, 500);
  });

  sphere2.addEventListener('mouseleave', function() {
    console.log("Left");
    clearInterval(effectInterval);
  });

  let sphere3 = document.getElementById("gMinorPlanet");
  sphere3.addEventListener('mouseenter', function() {
    // This planet changes the current scale being played to g Minor.
    currentScale = gMinor;
    console.log(currentScale);
  });

  let sphere4 = document.getElementById("eFlatMajorPlanet");
  sphere4.addEventListener('mouseenter', function() {
    // This planet changes the current scale being played to e Flat Major.
    currentScale = eFlatMajor;
    console.log(currentScale);
  });

  let sphere5 = document.getElementById("fastTempoPlanet");
  sphere5.addEventListener('mouseenter', function() {
    effectInterval = setInterval(function() {
      // This planet makes the music faster.
      tempo -= 50;
      console.log(tempo);
    }, 500);
  });

  sphere5.addEventListener('mouseleave', function() {
    console.log("Left");
    clearInterval(effectInterval);
  });

  let sphere6 = document.getElementById("slowTempoPlanet");
  sphere6.addEventListener('mouseenter', function() {
    effectInterval = setInterval(function() {
      // This planet makes the music slower.
      tempo += 50;
      console.log(tempo);
    }, 500);
  });

  sphere6.addEventListener('mouseleave', function() {
    console.log("Left");
    clearInterval(effectInterval);
  });

  let sphere7 = document.getElementById("aMajorPlanet");
  sphere7.addEventListener('mouseenter', function() {
    // This planet changes the current scale being played to a Major.
    currentScale = aMajor;
    console.log(currentScale);
  });

  let sphere8 = document.getElementById("eFlatMinorPlanet");
  sphere8.addEventListener('mouseenter', function() {
    // This planet changes the current scale being played to e Flat Minor.
    currentScale = eFlatMinor;
    console.log(currentScale);
  });

  let sphere9 = document.getElementById("fSharpMajorPlanet");
  sphere9.addEventListener('mouseenter', function() {
    // This planet changes the current scale being played to f Sharp Major.
    currentScale = fSharpMajor;
    console.log(currentScale);
  });
}

function playNote() {
  // Pick a random frequency from the current scale's array

  let frequency = currentScale[Math.floor(Math.random() * currentScale.length)];
  // Set the synth's frequency
  synth.frequency = frequency;
  // If it's note already play, play the synth

  synth.play();
  // This allows the tempo to change with handler events.
  setTimeout(playNote, tempo);
}
