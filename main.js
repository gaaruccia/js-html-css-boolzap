$(document).ready(function () {
  $("#search").keyup(function(){
  var name = $("#search");
  var nameVal = name.val();
  var nomeMinuscolo = nameVal.toLowerCase();
  $(".chat").each(function(){
    var nomeElemento = $(this).text().toLowerCase();
    if (nomeElemento.includes(nomeMinuscolo)){
      $(this).show()
    }else{
      $(this).hide()
    }
    })
  })
  $(".chat").click(function(){
    var data = $(this).data("conv");
    $(".chat").removeClass("active");
    $(this).addClass("active");
    $(".column-right").removeClass("active").addClass("invisible");
    $(".column-right").eq(data).addClass("active");
  })
  $(".festivalbar").click(function(){
    $(".fa-microphone").hide();
    $(".fa-telegram-plane").show();
  })
  $(".fa-telegram-plane").click(function(){
    var input = $(".active  .festivalbar");
    var inputVal = input.val();
    $(".active .main").append('<div class="message destra">' + '<span class="padding">' + inputVal + '<i class="fas fa-angle-down right-angle"></i><div class="sottomenu hiddenmenu_right">Cancella messaggio</div>' + '</span>' + '</div>');
    var msgRight = $('#msg-template-right').html();
    var template = Handlebars.compile(msgRight);
    var contenutoMsgright = {msgPHright: inputVal};
    var html = template(contenutoMsgright);
    $(".active .main").append(html)
    input.val("");
    $(".fa-telegram-plane").hide();
    $(".fa-microphone").show();
    setTimeout(timer, 1000)
    function timer(){
    $(".active .main").append('<div class="message sinistra">'+ '<span class="padding">' + "ok" + '<i class="fas fa-angle-down left-angle"></i><div class="sottomenu hiddenmenu_left">Cancella messaggio</div>' +'</span>' + '</div>');
    var msgLeft= $('#msg-template-left').html();
    var template = Handlebars.compile(msgLeft);
    var contenutoMsgleft = {msgPHleft: "ok"};
    var html = template(contenutoMsgleft);
    $(".active .main").append(html)
    }
  })
  $(".main").on("click", ".fa-angle-down", function(){
    $(this).next(".sottomenu").toggle();
  })
  $(".main").on("click", ".sottomenu", function(){
    $(this).parents(".message").remove();
  })

  var source = $('#msg-template-left').html();
  var template = Handlebars.compile(source);
  var context = {msgPHleft: "ok"};
  var html = template(context);
})
