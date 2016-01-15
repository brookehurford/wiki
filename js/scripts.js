$(document).ready(function(){
  $("#flower").click(function(){
    alert("I am a peony flower!");
  });

  $("button#flowerButton").click(function() {
    $("ul.unstyled").append('<img src="img/flower.jpg">');
  });

  $("#blanks form").submit(function(event) {
    var blanks = ["yourName", "yourNumber", "yourAge"];

    blanks.forEach(function(blank){
      var userInput = $("input#" + blank).val();
      var userSelect = $("select#" + blank).val();
      $("." + blank).append(userInput);
      $("." + blank).append(userSelect);
    })

    $("#yourInfo").show();
    event.preventDefault();
  });

  $("button#green").click(function() {
    $("p").removeClass();
    $("p").addClass("green-text");
  });

  $("button#yellow").click(function() {
    $("p").removeClass();
    $("p").addClass("yellow-text");
  });

  $("button#red").click(function() {
    $("p").removeClass();
    $("p").addClass("red-text");
  });

  $("form#activities").submit(function(event) {
    debugger;
    var userAge = $("input#userAge").val()

//Put else if and else tags next to previous, closing curly brackt. Very creative!//
    if (userAge <= 20){
     $(".playground").show();
     } else if (userAge >= 21 && userAge <= 35) {
      $(".bar").show();
     } else {
     $(".museum").show();
     }

  event.preventDefault();
  });
});
