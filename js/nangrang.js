// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function () {
    var modal = this;
    var hash = modal.id;
    window.location.hash = hash;
    window.onhashchange = function () {
        if (!location.hash) {
            $(modal).modal('hide');
        }
    }
});

$(document).ready(function () {
    var color = {
        brown: 'color:#560000;font-size:11px;',
        red: 'color:#d83128;font-size:11px;',
        yellow: 'color:#ea991b;font-size:11px;',
        green: 'color:#93ba2f;font-size:11px;',
        blue: 'color:#4da4e0;font-size:11px;'
    };

    if (typeof console === 'object' && console.log && typeof console.log === 'function') {
        console.log('We are nangrang. http://www.nangrang.kr')
    }

    function isUA(userAgent) {
        return navigator.userAgent.toLowerCase().indexOf(userAgent) > -1;
    }

    var IMAGE_COUNT = 1;
    var index = parseInt(Math.random() * 1000) % IMAGE_COUNT + 1;
    var header = $('header');
    if (header) {
        header.addClass('background' + index);
    }


    $(function () {
        var $window = $(window);
        var win_height_padded = $window.height() * 0.7;

        $window.on('scroll', function () {
            var scrolled = $window.scrollTop(),
                win_height_padded = $window.height() * 0.7;

            $(".animatable:not(.animated)").each(function () {
                var $this = $(this),
                    offsetTop = $this.offset().top;

                if (scrolled + win_height_padded > offsetTop) {
                    if ($this.data('timeout')) {
                        window.setTimeout(function () {
                            $this.addClass('animated ' + $this.data('animation'));
                        }, parseInt($this.data('timeout'), 10));
                    } else {
                        $this.addClass('animated ' + $this.data('animation'));
                    }
                }
            });
            
            $(".animatable.animated").each(function (index) {
                var $this = $(this),
                    offsetTop = $this.offset().top;
                if (scrolled + win_height_padded < offsetTop) {
                    $(this).removeClass('animated')
                }
            });
        });
    });
});