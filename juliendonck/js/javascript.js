$(document).ready(function() {

  $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 400);
    console.log("wuw");
    return false;
  });

  $('a.hover').hover(function() {
    $('img.cross').attr("src","img/arrow@2x.png");
    $('p.top').css('visibility', 'visible');
  }, function() {
      $('img.cross').attr("src","img/cross-36.png");
      $('p.top').css('visibility', 'hidden');
  });

  $('a.twitter').hover(function() {
    $("header").css('background-color', 'rgba(0,171,240,.95)');
  }, function() {
    $("header").css('background-color', 'rgba(0,163,204,.95)');
  });

  $('a.vimeo').hover(function() {
    $("header").css('background-color', 'rgba(27,182,236,.95)');
  }, function() {
    $("header").css('background-color', 'rgba(0,163,204,.95)');
  });

  $('a.dribbble').hover(function() {
    $("header").css('background-color', 'rgba(226,81,137,.95)');
  }, function() {
    $("header").css('background-color', 'rgba(0,163,204,.95)');
  });

  $('a.tumblr').hover(function() {
    $("header").css('background-color', 'rgba(58,88,118,.95)');
  }, function() {
    $("header").css('background-color', 'rgba(0,163,204,.95)');
  });

  $('a.instagram').hover(function() {
    $("header").css('background-color', 'rgba(81,127,164,.95)');
  }, function() {
    $("header").css('background-color', 'rgba(0,163,204,.95)');
  });
});



/*
//changing the color of the icon

var scroll_pos = 0;
$(document).scroll(function() {
  scroll_pos = $(this).scrollTop();
  if(scroll_pos > 210) {
    $("body").css('background-color', 'blue');
  } else {
    $("body").css('background-color', 'red');
  }
});



background-color: #00A3CC









*/
