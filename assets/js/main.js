!(function($) {
  "use strict";

  $('[name="recover"]').click(function(e){
    e.preventDefault();
    var pwd = $('#password').val();
    var cpwd = $('#cpassword').val();
    if(pwd != cpwd){
        $('#msg').text('As senhas estão diferentes.')
    }else{
        $('[name="form-recover"]').submit();
    }
  })

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

  // var form = $('[name=formfeed]');

  // form.ajaxSubmit({
  //   url: Routing.generate('feed_inc', { id : $(this).val() }),
  //   type: 'post'
  // });

})(jQuery);