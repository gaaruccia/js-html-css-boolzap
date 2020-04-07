$(".fa-microphone").click(function(){
  var input = $(".festivalbar");
  var inputVal = input.val()
  $("#main").append('<div class="destra row">' + inputVal + '</div>')
})
