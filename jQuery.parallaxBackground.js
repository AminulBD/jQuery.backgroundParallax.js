/*!
 * jQuery.backgroundParallax.js
 * The simple method to make background image parallax animation.
 *
 * @version 1.0.0
 * @link https://github.com/AminulBD/jQuery.backgroundParallax.js
 * @license MIT
 *
 * Copyright 2017, Aminul Islam
 */
(function ($) {

    var winHeight = (window.innerHeight || document.documentElement.clientHeight);
    $(window).on('resize', function () {
        winHeight = (window.innerHeight || document.documentElement.clientHeight);
    });

    // Element Visibility Checker
    var isVisible = function ($el) {
        if ($el.length) {
            el = $el[0];
        }
        var rect = el.getBoundingClientRect();

        return (
            rect.bottom >= 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    // Make Parallax
    var makeParallax = function ($el, options) {

        if (isVisible($el)) {
            var panelHeight = $el.height();
            var midHeight = $el[0].getBoundingClientRect().top + (panelHeight / 2);

            var midPercentage = (midHeight / winHeight) * 100;

            //lets tollerate 50% move up and down of the background image once parts of the image are off screen
            if (midPercentage > 150) {
                midPercentage = 150;
            } else if (midPercentage < -50) {
                midPercentage = -50;
            }

            // Put together our final background position
            var coords = '50% ' + midPercentage + '%';
            options.css.backgroundPosition = coords;

            var imageUrl = $el.data('src')

            if (imageUrl) {
                options.css.backgroundImage = 'url(' + imageUrl + ')';
            }

            $el.css(options.css);
        }
    };

    // Main Function
    $.fn.backgroundParallax = function (options) {

        // Check if is mobile
        var isMobile;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            isMobile = true;
        }

        var settings = $.extend({
            css: {
                backgroundSize: 'cover',
                backgroundPosition: '50% 0',
                backgroundRepeat: 'no-repeat',
                overflow: 'hidden'
            },
            isMobile: isMobile
        }, options);

        this.each(function () {
            var $this = $(this);

            if (settings.isMobile) {
                return;
            }

            makeParallax($this, settings);
            $(window).on('scroll', function () {
                makeParallax($this, settings);
            });
        });

        return this;

    };

}(jQuery));