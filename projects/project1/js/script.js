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

/*
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
*/

/*
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
*/
/*
 $.fn.addTab = function (name) {
    $('ul', this).append('<li><a href="#tab-' + name + '">' + name + '</a></li>');
    $(this).append("<div id='tab-" + name + "'></div>");
    $(this).tabs("refresh");
};
*/

// When the document is loaded, setup the code.

$(document).ready(setup);

function setup() {
  $( "#tabs" ).tabs();
}

function draw() {
//  if (random() <= 0.5) {
    console.log("Sup dude");
  //update();
//}
}
//

/* function update() {
if (random() <= 0.03) {
  console.log("Random");
  var num_tabs = $("div#tabs ul li").length + 1;
        $('div#tabs').tabs('add', 'tab'+num_tabs, num_tabs);
        $("div#tabs").tabs("refresh");
}
} */

// When the tab is closed, remove the tab/div.
//function tabClicked() {

//}
