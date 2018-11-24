$(function() {
  "use strict"; // Start of use strict

  $('.popup-youtube').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-wfade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"]), span.direction'/*a.js-scroll-trigger[direction]*/).click(function() {
    var $this = $(this), target;
    if($this.hasClass('direction')){
      var $sections = $('section[id]'),
          active_section = $sections.filter(function(){ return $("a[href='#"+$(this).attr('id')+"']").hasClass('active')}),
          active_index = $sections.index(active_section);
      if (this.id == "next")
        target = $sections.eq(active_index+1);
      else if (this.id == "prev")
        target = $sections.eq(active_index-1);
    } else if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    }
    if (target && target.length){
      $('html, body').animate({
        scrollTop: (target.offset().top)
      }, 1000, "easeInOutExpo");
      return false;
    }
  });

  var controlsDissapear = function() {
    var $sections = $('section[id]'),
        //$next_button = $("a.js-scroll-trigger[direction=next]"),
        //$prev_button = $("a.js-scroll-trigger[direction=prev]"),
        $next_button = $("#next"),
        $prev_button = $("#prev"),
        scrollDistance = $(document).scrollTop();
    if (scrollDistance < $sections.eq(1).offset().top) {
      $next_button.fadeIn();
      $prev_button.fadeOut();
    } else if (scrollDistance > $sections.eq(-2).offset().top){
      $next_button.fadeOut();
      $prev_button.fadeIn();
    } else {
      $next_button.fadeIn();
      $prev_button.fadeIn();
    }
  };

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();

    var pos = $('.nav-link.active');
    var scrollTop = $('#mainNav').scrollTop();
    console.log('scrollTop: '+scrollTop)
    pos = pos.length ?
        pos[0].offsetTop :
        0;
    console.log('posNoScroll: '+(pos-scrollTop))
    console.log('pos: '+pos);
    if (pos != scrollTop) {
      console.log('enter');
      $('#mainNav').stop().animate({
        scrollTop: pos
      }, 20, 'easeInOutExpo');
    }
    /*if (scrollDistance > 100)
      $('.scroll-to-top').fadeIn();
    else
      $('.scroll-to-top').fadeOut();*/

    controlsDissapear();
  });

  controlsDissapear();
  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  })
  var $navbar = $('#navbarResponsive');
  var $collapserIcon = $('#mainNav .collapser > i');
  var toggleNavbar = function(state){
    if (state === undefined)
      state = $navbar.css('display') == 'none';
    //$navbar.slideToggle(state);
    if (state) {
      $navbar.children().fadeIn(150);
      $navbar.animate({width:'show', padding:'show'}, 350);
      $collapserIcon.removeClass('fa-angle-right').addClass('fa-angle-left');
    }
    else {
      $navbar.children().fadeOut(150);
      $navbar.animate({width:'hide', padding:'hide'}, 350);
      $collapserIcon.removeClass('fa-angle-left').addClass('fa-angle-right');
    }
  };
  $(window).resize(function(){
    toggleNavbar($(this).width()+17 >= 992);
  });
  toggleNavbar($(this).width()+17 >= 992);

  $('#mainNav .collapser').click(function(){
    toggleNavbar();
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  /*var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100)
      $("#mainNav").addClass("navbar-shrink");
    else
      $("#mainNav").removeClass("navbar-shrink");
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);*/

  // Modal popup$(function () {
  /*$('.portfolio-item').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true
  });
  $(document).on('click', '.portfolio-modal-dismiss', function(e) {
    e.preventDefault();
    $.magnificPopup.close();
  });*/

  // Floating label headings for the contact form
  $(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

}); // End of use strict
