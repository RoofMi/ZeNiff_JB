let scrollTop = 0;
let bar;

$(document).ready(function () {
  bar = $(".scroll_bar_ing")[0];
});

$(window).scroll(function () {
  scrollTop = $(document).scrollTop();
  let per = Math.ceil((scrollTop / ($(document.body).outerHeight() - $(window).outerHeight())) * 100);
  $(bar).css("width", per + "%");
});

$(function () {
  var $header = $('header');
  var $scroll_bar_down = $('.scroll_bar');
  var $page = $('#section_about');
  var $window = $(window);
  var pageOffsetTop = $page.offset().top;

  $window.resize(function () {
    pageOffsetTop = $page.offset().top;
  });

  $window.scroll(function () {
    var scrolled = $window.scrollTop() >= pageOffsetTop;
    $header.toggleClass('header_down', scrolled);
    $scroll_bar_down.toggleClass('scroll_bar_down', scrolled);
  });

  $scroll_bar_down.on('mousedown', function (e) {
    e.preventDefault();
    var y = e.clientY;
    $(document).on('mousemove', function (e) {
      var newY = e.clientY;
      var distance = newY - y;
      var scrollPosition = $window.scrollTop();
      $window.scrollTop(scrollPosition - distance);
      y = newY;
    });
  });

  $(document).on('mouseup', function () {
    $(document).off('mousemove');
  });
});

var spanText = function spanText(text) {
  var lines = $(text).html().split("<br>");
  var spaned = "";
  for (var i = 0; i < lines.length; i++) {
    var string = lines[i];
    var lineSpaned = "";
    for (var j = 0; j < string.length; j++) {
      if (string.substring(j, j + 1) === " ") {
        lineSpaned += string.substring(j, j + 1);
      } else {
        lineSpaned += '<span>' + string.substring(j, j + 1) + '</span>';
      }
    }
    spaned += lineSpaned + "<br>";
  }
  $(text).html(spaned);
};

$(document).ready(function () {
  var headline = $(".home_text")[0];
  spanText(headline);

  let animations = $('.home_text');

  animations.each(function (i, animation) {
    let letters = $(animation).find('span');
    letters.each(function (i, letter) {
      $(letter).css("animation-delay", (i * 0.1) + 's');
    })
  })
});

function scrollToSection(selector) {
  const section = $(selector)[0];
  $(section).get(0).scrollIntoView({ behavior: 'smooth' });
}