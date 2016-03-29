/* Navigation Scroll */

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/* Map */

var map = new GMaps({
  div: '.map',
  lat: 33.4302089,
  lng: -111.956828,
});

map.addMarker({
  lat: 33.4302089,
  lng: -111.956828,
  title: 'meltmedia',
  infoWindow: {
    content: '<p>Interactive Superheroes HQ</p>'
}
});

/* Mobile Nav */

$('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    
    nav.slideToggle(200);
});


    $(window).resize(checkSize);
    function checkSize()
    {

        var nav_mobile = $('.js--nav-icon');
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        if(nav_mobile.css("display")==="none")
            nav.css("display", "block"); //make regular nav visible
        else if (icon.hasClass('ion-navicon-round')) //menu icon showing
            nav.css("display", "none");
        
    }



