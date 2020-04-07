$(".festivalbar").click(function(){
  $(".fa-microphone").hide()
  $(".fa-telegram-plane").show()
})
$(".fa-telegram-plane").click(function(){
  var input = $(".festivalbar");
  var inputVal = input.val()
  $("#main").append('<div class="destra row">' + inputVal + '</div>')
})
