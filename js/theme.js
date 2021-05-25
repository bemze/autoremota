// js Document

    // Created on   : 23/05/2018.
    // Theme Name   : Charles-Business-Consulting HTML Template.
    // Version      : 1.0.
    // Author       : @CreativeGigs.
    // Developed by : Jubayer al hasan. (jubayer.hasan1991@gmail.com)


(function($) {
    "use strict";
    
    
    $(document).on ('ready', function (){
        
        // -------------------- Navigation Scroll
        // $(window).on('scroll', function (){   
        //   var sticky = $('.theme-menu-wrapper'),
        //   scroll = $(window).scrollTop();
        //   if (scroll >= 190) sticky.addClass('fixed');
        //   else sticky.removeClass('fixed');

        // });

        // ------------------------------ Theme Menu 
        var menu= $("#mega-menu-holder");
          if(menu.length) {
            menu.slimmenu({
              resizeWidth: '991',
              animSpeed:'medium',
              indentChildren: true,
            });
          }


        // ------------------------------- WOW Animation 
        var wow = new WOW({
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       80,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
          });
          wow.init();


        
        // -------------------- Remove Placeholder When Focus Or Click
        $("input,textarea").each( function(){
            $(this).data('holder',$(this).attr('placeholder'));
            $(this).on('focusin', function() {
                $(this).attr('placeholder','');
            });
            $(this).on('focusout', function() {
                $(this).attr('placeholder',$(this).data('holder'));
            });     
        });
        
        // -------------------- From Bottom to Top Button
            //Check to see if the window is top if not then display button
        $(window).on('scroll', function (){
          if ($(this).scrollTop() > 200) {
            $('.scroll-top').fadeIn();
          } else {
            $('.scroll-top').fadeOut();
          }
        });
            //Click event to scroll to top
        $('.scroll-top').on('click', function() {
          $('html, body').animate({scrollTop : 0},1500);
          return false;
        });



        // --------------------------- Theme Main Banner Slider One
        var banner = $("#theme-main-banner");
        if (banner.length) {
          banner.camera({ //here I declared some settings, the height and the presence of the thumbnails 
            height: '780px',
            pagination: true,
            navigation: false,
            thumbnails: false,
            playPause: false,
            pauseOnClick: false,
            autoPlay:true,
            hover: false,
            overlayer: true,
            loader: 'none',
            minHeight: '400px',
            time: 6000,
          });
        };



        // ------------------------------------- Fancybox
        var fancy = $ (".fancybox");
        if(fancy.length) {
          fancy.fancybox({
            arrows: true,
            animationEffect: "zoom-in-out",
            transitionEffect: "zoom-in-out",
          });
        }


         

        // ------------------------------- Feature Slider
        var tSlider = $ (".top-features-slide");
        if(tSlider.length) {
            tSlider.owlCarousel({
              loop:true,
              nav:false,
              dots:false,
              autoplay:true,
              autoplayTimeout:4000,
              smartSpeed:1200,
              autoplayHoverPause:true,
              lazyLoad:true,
              responsive:{
                    0:{
                        items:1
                    },
                    500:{
                        items:2
                    },
                    992:{
                        items:3
                    },
                    1300:{
                        items:4,
                        autoplay:false,
                    }
                },
          })
        }



          // -------------------------------- Accordion Panel
          if ($('.theme-accordion > .panel').length) {
            $('.theme-accordion > .panel').on('show.bs.collapse', function (e) {
                  var heading = $(this).find('.panel-heading');
                  heading.addClass("active-panel");
                  
            });
            $('.theme-accordion > .panel').on('hidden.bs.collapse', function (e) {
                var heading = $(this).find('.panel-heading');
                  heading.removeClass("active-panel");
                  //setProgressBar(heading.get(0).id);
            });
            $('.panel-heading a').on('click',function(e){
                if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
                    e.stopPropagation();
                }
            });
          };


          // ------------------------- Product Quantity
          var inputVal = $("#product-value");
          if(inputVal.length) {
            $("#value-decrease").on('click', function() {
                var v= inputVal.val()-1;
                if(v>=inputVal.attr('min'))
                inputVal.val(v)
              });

            $("#value-increase").on('click', function() {
              var v= inputVal.val()*1+1;
              if(v<=inputVal.attr('max'))
              inputVal.val(v)
            });
          }
        

        
    });

    
    $(window).on ('load', function (){ // makes sure the whole site is loaded

        // -------------------- Site Preloader
        $('#loader').fadeOut(); // will first fade out the loading animation
        $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'});


        // ------------------------ Chart Js
        if($("#chartContainer").length) {
          var chart = new CanvasJS.Chart("chartContainer", {
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            animationEnabled: true,
            zoomEnabled: true,
            data: [{
              type: "area",
              dataPoints: []
            }]
          });

          addDataPoints(1000);  
          chart.render();

          function addDataPoints(noOfDps) {
            var xVal = chart.options.data[0].dataPoints.length + 1, yVal = 100;
            for(var i = 0; i < noOfDps; i++) {
              yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
              chart.options.data[0].dataPoints.push({x: xVal,y: yVal}); 
              xVal++;
            }
          }
        }


    })
    
})(jQuery)