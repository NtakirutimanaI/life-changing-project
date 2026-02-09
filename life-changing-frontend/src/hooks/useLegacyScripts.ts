import { useEffect } from 'react';

declare global {
    interface Window {
        $: any;
        jQuery: any;
        AOS: any;
    }
}

export function useLegacyScripts() {
    useEffect(() => {
        const $ = window.jQuery;
        if (!$) return;

        // Helper to ensure plugins are loaded
        const safeExecute = (name: string, fn: () => void) => {
            try {
                fn();
            } catch (e) {
                console.warn(`Legacy script error in ${name}:`, e);
            }
        };

        // AOS Init
        if (window.AOS) {
            window.AOS.init({
                duration: 800,
                easing: 'slide'
            });
        }

        // Stellar (Parallax)
        safeExecute('Stellar', () => {
            if ($(window).data('plugin_stellar')) {
                $(window).data('plugin_stellar').destroy();
                $(window).off('stellar');
            }
            $(window).stellar({
                responsive: false,
                parallaxBackgrounds: true,
                parallaxElements: true,
                horizontalScrolling: false,
                hideDistantElements: false,
                scrollProperty: 'scroll'
            });
        });

        // Full Height
        const fullHeight = function () {
            $('.js-fullheight').css('height', $(window).height());
            $(window).resize(function () {
                $('.js-fullheight').css('height', $(window).height());
            });
        };
        fullHeight();

        // Scrollax
        safeExecute('Scrollax', () => {
            $.Scrollax();
        });

        // Carousel
        safeExecute('OwlCarousel', () => {
            // Destroy existing if any to prevent duplication
            const $carousel = $('.carousel-cause');
            if ($carousel.data('owl.carousel')) {
                $carousel.trigger('destroy.owl.carousel');
            }

            $carousel.owlCarousel({
                autoplay: true,
                center: true,
                loop: true,
                items: 1,
                margin: 30,
                stagePadding: 0,
                nav: true,
                navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
                responsive: {
                    0: { items: 1, stagePadding: 0 },
                    600: { items: 2, stagePadding: 50 },
                    1000: { items: 3, stagePadding: 100 }
                }
            });
        });

        // Counter
        safeExecute('Counter', () => {
            $('#section-counter').waypoint(function (direction: string) {
                if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                    const comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                    $('.number').each(function (this: HTMLElement) {
                        const $this = $(this),
                            num = $this.data('number');
                        $this.animateNumber(
                            {
                                number: num,
                                numberStep: comma_separator_number_step
                            }, 7000
                        );
                    });
                }
            }, { offset: '95%' });
        });

        // Content Waypoint
        safeExecute('ContentWaypoint', () => {
            $('.ftco-animate').waypoint(function (this: any, direction: string) {
                if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                    // Remove item-animate if it exists from previous run
                    $(this.element).removeClass('item-animate');

                    $(this.element).addClass('item-animate');
                    setTimeout(function () {
                        $('body .ftco-animate.item-animate').each(function (k) {
                            const el = $(this);
                            setTimeout(function () {
                                const effect = el.data('animate-effect');
                                if (effect === 'fadeIn') {
                                    el.addClass('fadeIn ftco-animated');
                                } else if (effect === 'fadeInLeft') {
                                    el.addClass('fadeInLeft ftco-animated');
                                } else if (effect === 'fadeInRight') {
                                    el.addClass('fadeInRight ftco-animated');
                                } else {
                                    el.addClass('fadeInUp ftco-animated');
                                }
                                el.removeClass('item-animate');
                            }, k * 50, 'easeInOutExpo');
                        });
                    }, 100);
                }
            }, { offset: '95%' });
        });

        // Magnific Popup
        safeExecute('MagnificPopup', () => {
            $('.image-popup').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                fixedContentPos: true,
                mainClass: 'mfp-no-margins mfp-with-zoom',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1]
                },
                image: {
                    verticalFit: true
                },
                zoom: {
                    enabled: true,
                    duration: 300
                }
            });

            $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        });

        // Datepicker & Timepicker
        safeExecute('Pickers', () => {
            if ($('#appointment_date').length) {
                $('#appointment_date').datepicker({
                    'format': 'm/d/yyyy',
                    'autoclose': true
                });
            }
            if ($('#appointment_time').length) {
                $('#appointment_time').timepicker();
            }
        });

    }, []);
}
