$(document).ready(function(){
  $('.visualWrapper').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true, // 부드러운 배경 전환 효과
    arrows: false,
    dots: true,
    cssEase: 'linear'
  });
});

$(function () {
  $('#gnb').on('mouseenter', function () {
    let maxHeight = 0;
    $('#gnb li ol').each(function () {
      const h = $(this).outerHeight();
      if (h > maxHeight) maxHeight = h;
    });
    $(this).addClass('active');
    $('.gnbBg').height(maxHeight + 40); 
  });

  $('#gnb').on('mouseleave', function () {
    $(this).removeClass('active');
  });
});

$(function () {
  $('.btnSearch').on('click', function () {
    $('.searchField').addClass('active');
    $('.searchWrap').addClass('active');
    $('.userBox').addClass('invisible');
    $('.searchField input').focus();
  });

  $('.btnSearchClose').on('click', function () {
    $('.searchField').removeClass('active');
    $('.searchWrap').removeClass('active');
    $('.userBox').removeClass('invisible');
  });
});



$(function () {
  $('.btnHamburger').on('click', function () {
    $('.sidePanel').toggleClass('active');
  });

  $('.btnPanelClose').on('click', function () {
    $('.sidePanel').removeClass('active');
  });

  // 아코디언 메뉴 열고 닫기
  $('#gnb ul > li > a').on('click', function (e) {
    if ($(window).width() <= 1379) {
      e.preventDefault(); // 링크 동작 막고
      $(this).parent().toggleClass('active').siblings().removeClass('active');
    }
  });
});







