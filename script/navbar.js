document.addEventListener("DOMContentLoaded", function() { 
  document.querySelector('.nav-menu').addEventListener('click', event => {
    event.target.classList.toggle('active');
    var navList = document.getElementById("nav-list");
    navList.classList.toggle("show-list");
    fadeIn(navList);
  });

  if (window.scrollY > 50) {
    document.querySelector('.nav').classList.add('affix');
  } else {
    document.querySelector('.nav').classList.remove('affix');
  }
});

window.addEventListener("scroll", event => {
  if (window.scrollY > 50) {
    document.querySelector('.nav').classList.add('affix');
  } else {
    document.querySelector('.nav').classList.remove('affix');
  }
});

function fadeIn( elem, ms ) {
  if( ! elem )
    return;

  elem.style.opacity = 0;
  elem.style.filter = "alpha(opacity=0)";
  elem.style.display = "inline-block";
  elem.style.visibility = "visible";

  if( ms )
  {
    var opacity = 0;
    var timer = setInterval( function() {
      opacity += 50 / ms;
      if( opacity >= 1 )
      {
        clearInterval(timer);
        opacity = 1;
      }
      elem.style.opacity = opacity;
      elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
    }, 50 );
  }
  else
  {
    elem.style.opacity = 1;
    elem.style.filter = "alpha(opacity=1)";
  }
}