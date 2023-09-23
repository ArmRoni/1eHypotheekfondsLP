(function($){
    function marQFun() {
        let widthResize = jQuery(window).width();
        let appendMarQ = jQuery('.marquee_style_area');
        let banner_list = jQuery('.banner_list');

        if (widthResize < 1278) {
            jQuery('.header_area').prepend(appendMarQ);
        }else {
            jQuery('.right_headerInner').prepend(appendMarQ);
        }

        if (widthResize < 992) {
            jQuery('.banner_form_wrap').after(banner_list);
        }else {
            jQuery('.banner_title').after(banner_list);
        }
    }

    marQFun();
    jQuery(window).resize(function() {
        marQFun();
    });

    // function form_footer() {
    let widthResize = jQuery(window).width();
    let aboutus_item_photo = jQuery('.aboutus_item_photo');
    if ( widthResize < 991 ) {
            jQuery('.aboutus_item1 .aboutus_item_info').append(aboutus_item_photo);
    }else {
            jQuery('.aboutus_item2').append(aboutus_item_photo);
    }
    // }

     

    // form_footer();
    // jQuery(window).resize(function() {
    //             form_footer();
    // });

    jQuery(window).scroll(function(){
        if (jQuery(this).scrollTop() > 60) {
           jQuery('.header_container').addClass('header_sticky');
        } else {
           jQuery('.header_container').removeClass('header_sticky');
        }
    });



    jQuery(document).ready(function(){
        // jQuery.fn.isInViewport = function() {
        // var elementTop = jQuery(this).offset().top;
        // var elementBottom = elementTop + jQuery(this).outerHeight();

        // var viewportTop = jQuery(window).scrollTop();
        // var viewportBottom = viewportTop + jQuery(window).height();

        //     return elementBottom > viewportTop && elementTop < viewportBottom;};

        // jQuery(window).on('resize scroll', function() {
        //     if(jQuery('.sticky-footer-view').length > 0) {
        //         if (jQuery('.sticky-footer-view').isInViewport()) {
        //             jQuery('.header_floating_btn_wrap').removeClass('is_stuck');
        //         } else {
        //             jQuery('.header_floating_btn_wrap').addClass('is_stuck');
        //         }
        //     }
        // });

        //  jQuery(window).on('resize scroll', function() {
        //     if(jQuery('.sticky-footer-view2').length > 0) {
        //         if (jQuery('.sticky-footer-view2').isInViewport()) {
        //             jQuery('.header_floating_btn_wrap').removeClass('is_stuck_dn');
        //         } else {
        //             jQuery('.header_floating_btn_wrap').addClass('is_stuck_dn');
        //         }
        //     }
        // });


        
        
        jQuery(function(){
            jQuery('.tigger_btn .header_btn').click(function () {
                var Lochref = jQuery(this).attr('href');
                jQuery("html, body").stop().animate({
                scrollTop: jQuery(Lochref).offset().top-150
                }, 1500);
                return false;
            });
        });
    });

jQuery(window).load(function() {
    if(matchMedia('only screen and (max-width: 767px)').matches) {
        var $mwo = $('.marquee-with-options');
        jQuery('.marquee').marquee();
        jQuery('.marquee-with-options').marquee({
            speed: 40,
            gap: 0,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            pauseOnHover: true,
            startVisible:true,
        });

        //pause and resume links
        jQuery('.pause').click(function(e){
            e.preventDefault();
            $mwo.trigger('pause');
        });

        jQuery('.resume').click(function(e){
            e.preventDefault();
            $mwo.trigger('resume');
        });

        //toggle
        jQuery('.toggle').hover(function(e){
            $mwo.trigger('pause');
            },function(){
            $mwo.trigger('resume');
        })
        .click(function(e){
            e.preventDefault();
        })
    }

    });

    jQuery( ".toggle_view_bg" ).click(function(e) {
        if(jQuery(this).parent('.toggle_view_item').hasClass('active')) {
        } else {
            $( ".toggle_view_bg" ).each(function() {
                if(jQuery(this).parent('.toggle_view_item').hasClass('active')) {
                    jQuery(this).parent('.toggle_view_item').toggleClass('active');
                    jQuery(this).next('.show_details').slideToggle('hide');
                }
            });
        }
        jQuery(this).parent('.toggle_view_item').toggleClass('active');
        jQuery(this).next('.show_details').slideToggle('slow');
        e.preventDefault();
    });
})(jQuery);

    