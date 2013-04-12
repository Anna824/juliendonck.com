$(document).ready(function() {

  $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 400);
    return false;
  });

  var scroll_pos = 0;
  $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if(scroll_pos > 380) {

      $('img.cross').attr("src","https://raw.github.com/juliendonck/juliendonck.com/master/juliendonck/img/arrow-dark@2x.png");
      $('a.hover').hover(function() {
        $('p.top').css('visibility', 'visible');
        $('img.cross').attr("src","https://raw.github.com/juliendonck/juliendonck.com/master/juliendonck/img/arrow-dark@2x.png");
      }, function() {
        $('p.top').css('visibility', 'hidden');
        $('img.cross').attr("src","https://raw.github.com/juliendonck/juliendonck.com/master/juliendonck/img/arrow-dark@2x.png");
      });

    } else {

      $('img.cross').attr("src","https://raw.github.com/juliendonck/juliendonck.com/master/juliendonck/img/cross-light@2x.png");
      $('a.hover').hover(function() {
        $('img.cross').attr("src","https://raw.github.com/juliendonck/juliendonck.com/master/juliendonck/img/cross-light@2x.png");
        $('p.top').css('visibility', 'hidden');
      });

    }
  });




  $('a.twitter').hover(function() {
    $("header").css('background-color', 'rgb(0,171,240)');
    $(".twitter img").css({ opacity: 0.9 });
  }, function() {
    $("header").css('background-color', '#00A3CC');
    $(".twitter img").css({ opacity: 1 });
  });

  $('a.vimeo').hover(function() {
    $("header").css('background-color', 'rgb(27,182,236)');
    $(".vimeo img").css({ opacity: 0.9 });
  }, function() {
    $("header").css('background-color', '#00A3CC');
    $(".vimeo img").css({ opacity: 1 });
  });

  $('a.dribbble').hover(function() {
    $("header").css('background-color', 'rgb(226,81,137)');
    $(".dribbble img").css({ opacity: 0.9 });
  }, function() {
    $("header").css('background-color', '#00A3CC');
    $(".dribbble img").css({ opacity: 1 });
  });

  $('a.tumblr').hover(function() {
    $("header").css('background-color', 'rgb(58,88,118)');
    $(".tumblr img").css({ opacity: 0.9 });
  }, function() {
    $("header").css('background-color', '#00A3CC');
    $(".tumblr img").css({ opacity: 1 });
  });

  $('a.instagram').hover(function() {
    $("header").css('background-color', 'rgb(81,127,164)');
    $(".instagram img").css({ opacity: 0.9 });
  }, function() {
    $("header").css('background-color', '#00A3CC');
    $(".instagram img").css({ opacity: 1 });
  });

  $("a.source").each(function(i, value) {
   var $link = jQuery(value);
   var text = $link.text();

   if(text.length > 25) {
      $link.text(text.substring(0, 21) + "...");
   }
  });


});


