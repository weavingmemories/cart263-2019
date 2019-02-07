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


 var tabTitles = [
  "Cake",
  "Parfait",
  "IceCream",
  "Danish",
  "Eclair",
  "Strawberry",
  "Mango",
  "Orange"
];

var tabContent = [
  "DogDogDogDogDogDogDogDogDogDogDogDogDogDogDogDogDogDogDogDogDogDogDogDogDog",
  "CatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCat",
  "RabbitRabbitRabbitRabbitRabbitRabbitRabbitRabbitRabbitRabbitRabbitRabbitRabbit",
  "SnailSnailSnailSnailSnailSnailSnailSnailSnailSnailSnailSnailSnailSnailSnailSnail",
  "MongooseMongooseMongooseMongooseMongooseMongooseMongooseMongooseMongooseMongoose",
  "ElephantElephantElephantElephantElephantElephantElephantElephantElephantElephant",
  "MonkeyMonkeyMonkeyMonkeyMonkeyMonkeyMonkeyMonkeyMonkeyMonkeyMonkeyMonkeyMonkey",
  "CockatielCockatielCockatielCockatielCockatielCockatielCockatielCockatielCockatiel"
];

// let tabCounter = document.getElementById("tabs")


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
    draw();
  }, 1);

}

function draw() {
//  console.log("draw loop working");
  update();
//  console.log(tabCounter);
}

 function update() {
$(this).on("click", removeTab);
  // if (tabCounter <= 10) {
if (Math.random() <= 0.01) {
  // console.log("update function working");
  addTab();
  }
// }
}

// addTab(): This function adds a new list element, thereby adding a new tab
// and then refreshing the tabs so they all update and display.

function addTab() {

  $("<li><a href='myTab.txt'>New Tab</a></li>").appendTo("#tabs .ui-tabs-nav");
  $("#tabs").tabs("refresh");
}

// When the tab is closed, remove the tab/div.
function removeTab() {
  if ($(this).hasClass("ul-tabs-tab")) {
          $(this).remove();
        }
      $("#tabs").tabs("refresh");
    }
