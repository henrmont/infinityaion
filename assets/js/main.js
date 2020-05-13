!(function($) {
  "use strict";

  //navbar
  $('hr').hide();
  $('.tcenter').mouseover(function(){
    $('hr').show();
  });

  $('.tcenter').mouseout(function(){
    $('hr').hide();
  });

  //navbar
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      document.getElementById("navbar").style.padding = "5px 10px";
      document.getElementById("logo").style.width = "100px";
    } else {
      document.getElementById("navbar").style.padding = "20px 10px";
      document.getElementById("logo").style.width = "150px";
    }
  };

})(jQuery);