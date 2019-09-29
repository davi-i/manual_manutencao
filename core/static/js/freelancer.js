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
  $('a.js-scroll-trigger[href*="#"]:not([href="#"]), span.direction').click(function() {
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
    var $active = $('.nav-link.active'),
        $mainNav = $('#mainNav'),
        pos = $active.length ?
            $active[0].offsetTop - $mainNav.height()/2 + $active.height()/2 :
            0,
        height = $mainNav[0].scrollHeight,
        scrollTop = $mainNav.scrollTop();
    pos = pos < 0 ?
        0 :
        pos > height-$(window).height() ?
            height-$(window).height() :
            pos;
    if (parseInt(scrollTop) != parseInt(pos))
      $mainNav.stop().animate({
        scrollTop: pos
      }, 500, 'easeInOutExpo');

    controlsDissapear();
  });

  controlsDissapear();

  var adjustMargin = function() {
    var $mainNav = $('#mainNav');
    var scrollBar = $mainNav.height() < $mainNav[0].scrollHeight;
    var tamanho = $(window).width() >= 992;
    if (scrollBar){
      if (tamanho) {
        $('body > header, section').each(function(){
          var $this = $(this);
          $this.css('margin-left', (parseFloat($('html').css('font-size'))*19+10)+'px');
        });
        $('.direction').each(function(){
          var $this = $(this);
          $this.css('margin-left', (parseFloat($('html').css('font-size'))*9.5+5)+'px');
        });
      } else {
        $('body > header, section, .direction').css('margin-left', 0);
      }
    }
  }
  var $navbar = $('#navbarResponsive');
  var $collapser = $('span.collapser');
  var toggleNavbar = function(state){
    if ($(window).width() > 992)
      return;
    if (state === undefined)
      state = $navbar.css('display') == 'none';
    if (state) {
      var $mainNav = $('#mainNav');
      var scrollBar = $mainNav.height() < $mainNav[0].scrollHeight;
      $navbar.children().fadeIn(150);
      $navbar.animate({width:'show', padding:'show'}, 350);
      $collapser.animate({marginLeft:'19rem'}, 350, function(){
        if (scrollBar)
          $collapser.animate({marginLeft: (parseFloat($('html').css('font-size'))*19+10)+'px'}, 'fast');
      }).children('i')
            .removeClass('fa-angle-right').addClass('fa-angle-left');
    }
    else {
      $navbar.children().fadeOut(150);
      $navbar.animate({width:'hide', padding:'hide'}, 350);
      $collapser.animate({marginLeft: '0'}, 350)
          .children('i')
              .removeClass('fa-angle-left').addClass('fa-angle-right');
    }
  };
  $(window).resize(function(){
    toggleNavbar($(this).width()+17 >= 992);
    adjustMargin();
  });
  toggleNavbar($(this).width()+17 >= 992);
  adjustMargin();
  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    toggleNavbar(false);
  })

  $('span.collapser').click(function(){
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
