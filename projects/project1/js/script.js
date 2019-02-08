/*****************

Claustro-tab-ia
Macey McCormick

This project intends to evoke a Sisphyian torture upon the user. The goal,
closing all of the tabs on the window, is one that can never be reached--
new tabs open up, and the less tabs there are, the quicker new tabs open
to prevent the player from truly reaching any 'end' state.

******************/

/*
     Goals:

  1. Create a window at a specific size.
  2. The window will generate divs within a specific area, which will
     all appear next to each other. (If possible, the more tabs there are,
     the smaller the divs will be to simulate real tabs)
  3. Tabs/Divs will be generated on a random probability that increases if there
     are less than 5 tabs/divs, and decreased if there are more than 10.
  4. When the user closes a tab, by pressing the small x on the div, the tab
     will close and disappear, making the rest of them slide left.
  5. Closing a tab incites a sound, as does when a tab opens.
  6. Each tab is generated and pulls text from an array, for tab titles.

    Optional Goals:

  a) Creating an aesthetically pleasing desktop.
  b) Adding tab 'icons' (the little logos that appear next to tab names,
     to the left)
*/

"use strict";

// Variables

let closeTabSFX = new Audio("assets/sounds/closetab.wav");

// Initially, there was going to be an array of randomly generated titles
// via this list. I would like to eventually add this to the project.

/* var tabTitles = [
  "Get Rid of TABS For Good",
  "Top 10 Tips To Grow Your TABS",
  "TABS? It's Easy If You Do It Smart",
  "TABS Strategies For Beginners",
  "Your Key To Success: TABS",
  "Take The Stress Out Of TABS",
  "TABS Smackdown!",
  "TABS: What A Mistake!",
  "Master (Your) TABS in 5 Minutes A Day"
];

*/

let idNumber = 0;
let tabCount = 0;

// When the document is loaded, setup the code.

$(document).ready(setup);

// Setup: Loads the tabs in jquery and sets an interval to call draw
// on a loop every 1000 milliseconds. This ensures the program is continuously
// updating.

function setup() {

    var tabs = $( "#tabs" ).tabs();

  $( "#tabs" ).tabs();
  console.log("setup working");
  setInterval(function() {
    update();
  }, 1);

}

// update(): This function acts as a draw loop, updating the page
// at the interval set in the previous function. To make the objective
// of closing all tabs impossible, the speed at which tabs regenerate
// increases drastically if there are 2 or less tabs currently on the
// page. The probability, when the condition is true, calls the addTab() function.

 function update() {
let randomAmount = 0.01;
   if (tabCount <= 2) {
  randomAmount = 0.3;
}
if (Math.random() <= randomAmount) {
  // console.log("update function working");
  addTab();

  }
// }
}

// addTab(): This function adds a new list element, thereby adding a new tab
// and then refreshing the tabs so they all update and display. It also
// adds a span, that displays as [x], which when clicked, calls the function
// removeTab(), which will close the tab.

function addTab() {
  if (tabCount <=10) {
    let span = $("<span>[x]</span>");

  // Originally supposed to work in tandem with the array. Hoping to add this in later.
  //  let tabTitle = tabTitles[Math.floor(Math.random()*tabTitles.length)];

let tab = $("<li><a href='#tab" + idNumber + "'>New Tab</a></li>");

tab.append(span);
span.on("click", removeTab);
  tab.appendTo("#tabs .ui-tabs-nav");
  if (idNumber <=9) {
  idNumber++;
}
  if (idNumber >=9) {
    idNumber = 0;
  }
  tabCount++;
  $("#tabs").tabs("refresh");
  }
}

// removeTab(): This function removes the tab.

function removeTab() {
   closeTabSFX.play();
   $(this).parent().remove();
   tabCount--;
   $("#tabs").tabs("refresh");

    }
