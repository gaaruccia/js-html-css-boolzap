$(document).ready(function () {
  $(".festivalbar").click(function(){
    $(".fa-microphone").hide()
    $(".fa-telegram-plane").show()
  })
  $(".fa-telegram-plane").click(function(){
    var input = $(".festivalbar");
    var inputVal = input.val()
    $(".main").append('<div class="destra row">' + '<span class="padding">' + inputVal + '</span>' + '</div>')
    input.val("")
    $(".fa-telegram-plane").hide()
    $(".fa-microphone").show()
    setTimeout(timer, 1000)
    function timer(){
    $(".main").append('<div class="sinistra row">'+ '<span class="padding">' + "ok" + '</span>' + '</div>')
    }
  })
  $(".fa-search").click(function(){
  var name = $("#search");
  var nameVal = name.val();
  var nomeMaiuscolo = nameVal.charAt(0).toUpperCase() + nameVal.slice(1);
  $(".chat").each(function(){
    var nomeElemento = $(this).text();
    if (nomeElemento.includes(nomeMaiuscolo)){
      $(this).show()
    }else{
      $(this).hide()
    }
    })
  })
})
