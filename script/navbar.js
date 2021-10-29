document.addEventListener("DOMContentLoaded", function() { 
  $('.nav-menu').click(function () {
    $(this).toggleClass('active');
    $("#nav-list").toggleClass("show-list");
    $("#nav-list").fadeIn();
  });
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.nav').addClass('affix');
  } else {
    $('.nav').removeClass('affix');
  }
});