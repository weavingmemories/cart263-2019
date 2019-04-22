"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let eFlatMajor = [
  311.13, 293.66, 261.63, 233.08, 207.65, 196.00, 174.61, 155.56
];

let cMajor = [
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

let currentScale = cMajor;
let effectInterval;
let effectGain = 0;
let synth;
let interval;
let tempo = 500;

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

  $("#StartButton").click(function() {
    $("#SplashScreen").hide();
    $("#spaceJam").show();
    setTimeout(playNote, tempo);
  });

  let sphere = document.getElementById("addGainPlanet");
  sphere.addEventListener('mouseenter', function() {
    effectInterval = setInterval(function() {
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
    currentScale = gMinor;
    console.log(currentScale);
  });

  let sphere4 = document.getElementById("eFlatMajorPlanet");
  sphere4.addEventListener('mouseenter', function() {
    currentScale = eFlatMajor;
    console.log(currentScale);
  });

  let sphere5 = document.getElementById("fastTempoPlanet");
  sphere5.addEventListener('mouseenter', function() {
    effectInterval = setInterval(function() {
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
      tempo += 50;
      console.log(tempo);
    }, 500);
  });

  sphere6.addEventListener('mouseleave', function() {
    console.log("Left");
    clearInterval(effectInterval);
  });
}

function playNote() {
  // Pick a random frequency from the array

  let frequency = currentScale[Math.floor(Math.random() * currentScale.length)];
  // Set the synth's frequency
  synth.frequency = frequency;
  // If it's note already play, play the synth

  synth.play();
  setTimeout(playNote, tempo);
}

function pauseNote() {
  clearInterval(interval);
  synth.stop();
}
