var Clicks = 0;
playSound("backgroundmusic.mp3", true);
//clicking system
timedLoop(.1, function() {
  setText("label1", "khans: \n" + Clicks);
});
onEvent("image1", "click", function( ) {
  playSound("assets/category_app/app_button_1.mp3", false);
  Clicks = Clicks + .5;
});
//shop
  //buttons
onEvent("button1", "click", function( ) {
  setScreen("store");
});
onEvent("button2", "click", function( ) {
  setScreen("clicker");
});
//shop items
  //compound bow
onEvent("image2", "click", function( ) {
  if (Clicks >= 50) {
    Clicks = Clicks - 50;
    playSound("assets/category_collect/energy_bar_recharge_6.mp3", false);
    timedLoop(1000, function() {
      Clicks = Clicks + 5;
    });
  } else {
    playSound("assets/category_collect/collect_item_bling_1.mp3", false);
    setTimeout(function() {
      playSound("assets/category_collect/collect_item_bling_1.mp3", false);
    }, 100);
  }
});
