document.addEventListener("DOMContentLoaded", function() { 
  document.querySelector('.nav-menu').click(function () {
    document.querySelector(this).classList.toggle('active');
    document.querySelector("#nav-list").classList.toggle("show-list");
    document.querySelector("#nav-list").fadeIn();
  });
});

document.querySelector(window).scroll(function() {
  if (document.querySelector(document).scrollTop > 50) {
    document.querySelector('.nav').classList.add('affix');
  } else {
    document.querySelector('.nav').removeClass('affix');
  }
});