$(document).ready(function() {


/* CHANGE CROSS TO ARROW ON SCROLL */

  $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 400);
    return false;
  });

  $('a.hover').hover(function() {
    if($(document).scrollTop() > 380) {
      $('p.top').animate({opacity: 1.0}, 300);
      $('img.cross').attr("src","https://raw.github.com/juliendonck/juliendonck.com/master/juliendonck/img/arrow-dark@2x.png");
    }
  }, function() {
    if($(document).scrollTop() > 380) {
      $('p.top').animate({opacity: 0}, 300);
      $('img.cross').attr("src","https://raw.github.com/juliendonck/juliendonck.com/master/juliendonck/img/arrow-dark@2x.png");
    }
  });

  $(document).scroll(function() {
    if($(this).scrollTop() > 380) {
      $('img.cross').attr("src","https://raw.github.com/juliendonck/juliendonck.com/master/juliendonck/img/arrow-dark@2x.png");
    } else {
      $('img.cross').attr("src","https://raw.github.com/juliendonck/juliendonck.com/master/juliendonck/img/cross-light@2x.png");
    }
  });


/* CHANGE HEADER BACKGROUND ON HOVER SOCIAL LINKS */

  $('a.twitter').hover(function() {
    $("header").animate({backgroundColor: 'rgb(0,171,240)'},200);
    $(".twitter img").css({ opacity: 0.9 });
  }, function() {
    $("header").animate({backgroundColor: '#00A3CC'},200);
    $(".twitter img").css({ opacity: 1 });
  });

  $('a.vimeo').hover(function() {
    $("header").animate({backgroundColor: 'rgb(27,182,236)'},200);
    $(".vimeo img").css({ opacity: 0.9 });
  }, function() {
    $("header").animate({backgroundColor: '#00A3CC'},200);
    $(".vimeo img").css({ opacity: 1 });
  });

  $('a.dribbble').hover(function() {
    $("header").animate({backgroundColor: 'rgb(226,81,137)'},200);
    $(".dribbble img").css({ opacity: 0.9 });
  }, function() {
    $("header").animate({backgroundColor: '#00A3CC'},200);
    $(".dribbble img").css({ opacity: 1 });
  });

  $('a.tumblr').hover(function() {
    $("header").animate({backgroundColor: 'rgb(58,88,118)'},200);
    $(".tumblr img").css({ opacity: 0.9 });
  }, function() {
    $("header").animate({backgroundColor: '#00A3CC'},200);
    $(".tumblr img").css({ opacity: 1 });
  });

  $('a.instagram').hover(function() {
    $("header").animate({backgroundColor: '#517FA4'},200);
    $(".instagram img").css({ opacity: 0.9 });
  }, function() {
    $("header").animate({backgroundColor: '#00A3CC'},200);
    $(".instagram img").css({ opacity: 1 });
  });


/* TRUNCHATE LINKS TO 21 CHARACTERS */

  $("a.source").each(function(i, value) {
   var $link = jQuery(value);
   var text = $link.text();

   if(text.length > 25) {
      $link.text(text.substring(0, 21) + "...");
   }
  });


});


