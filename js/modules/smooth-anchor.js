/*
 * Smooth scrolling for anchor links
 * Borrowed from: http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links
 */

$(function() {
    $('body').on('click', 'a[href*=#]:not([href=#])', function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 20
                }, 1000);
            }

            // We still want to simulate the :target effect
            target.addClass('target');
            setTimeout(function() {
                target.removeClass('target');
            }, 2000);
            return false;
        }
    });
});