$(document).ready(function() {

  $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 400);
    return false;
  });

  var scroll_pos = 0;
  $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if(scroll_pos > 380) {

      $('img.cross').attr("src","img/cross-dark@2x.png");
      $('p.top').css('color','#00A3CC');
      $('a.hover').hover(function() {
        $('img.cross').attr("src","img/arrow-dark@2x.png");
        $('p.top').css('visibility', 'visible');
      }, function() {
        $('img.cross').attr("src","img/cross-dark@2x.png");
        $('p.top').css('visibility', 'hidden');
      });

    } else {

      $('img.cross').attr("src","img/cross-light@2x.png");
      $('a.hover').hover(function() {
        $('img.cross').attr("src","img/cross-light@2x.png");
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
});



/*
//changing the color of the icon

var scroll_pos = 0;
$(document).scroll(function() {
  scroll_pos = $(this).scrollTop();
  if(scroll_pos > 450) {
    $("body").css('background-color', 'blue');
  } else {
    $("body").css('background-color', 'red');
  }
});



background-color: #00A3CC









*/
