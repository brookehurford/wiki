$(document).ready(function(){
  $("#flower").click(function(){
    alert("I am a peony flower!");
  });

  $("button#flowerButton").click(function() {
    $("ul.unstyled").append('<img src="img/flower.jpg">');
  });

  $("form#some-form").submit(function(event) {
    var yourName = $("input#yourName").val()
    var yourNumber = $("input#yourNumber").val()
    var yourAge = $("select#yourAge").val()

    $(".yourName").append(yourName);
    $(".yourNumber").append(yourNumber);
    $(".yourAge").append(yourAge);

    $("#yourInfo").show();

  event.preventDefault();
  });
});
