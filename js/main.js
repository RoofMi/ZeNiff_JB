let scrollTop = 0;
let bar;

window.onload = function () {
  bar = document.getElementsByClassName("scroll_bar_ing")[0];
};

window.addEventListener( "scroll", () => {
  scrollTop = document.documentElement.scrollTop; // y축 방향으로 얼만큼 스크롤했는지!
  let per = Math.ceil((scrollTop / (document.body.scrollHeight - window.outerHeight)) * 100);
    bar.style.width = per + "%";
  },
  false
);

$(function(){
  var $header = $('header'); //헤더를 변수에 넣기
  var $scroll_bar_down = $('.scroll_bar');
  var $page = $('#section_about'); //색상이 변할 부분
  var $window = $(window);
  var pageOffsetTop = $page.offset().top -60;//색상 변할 부분의 top값 구하기
  
  $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
    pageOffsetTop = $page.offset().top;
  });

  $window.on('scroll', function(){ //스크롤시
    var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
    $header.toggleClass('header_down', scrolled); //클래스 토글
    $scroll_bar_down.toggleClass('scroll_bar_down', scrolled); //클래스 토글
  });
});