$(function () {
    $(window).on("load", function () {
        $("#loader").fadeOut(),
            $("body").removeClass("no-scroll"),
            setTimeout(() => {
                $("#loader").addClass("hidden"), $("#loader").hide();
            }, 2e3);
    }),
        $(window).on("scroll", function (o) {
            80 < $(this).scrollTop()
                ? $(".navbar").addClass("navbar-shrink")
                : $(".navbar").removeClass("navbar-shrink");
        }),
        $("#scrollableDiv").on("mouseover", function () {
            $("#marquee").removeClass("running").addClass("pause");
        }),
        $("#scrollableDiv").on("mouseleave", function () {
            $("#marquee").removeClass("pause").addClass("running");
        }),
        $("#navbarSupportedContent a:not(.dropdown-toggle)").on(
            "click",
            function () {
                $("#navbarSupportedContent").collapse("hide");
            }
        ),
        $(".owl-carousel").owlCarousel({
            loop: !0,
            rtl: !0,
            margin: 30,
            autoplay: !0,
            autoplayTimeout: 3e3,
            nav: !0,
            navText: [
                '<img src="/static/imgs/icons/arrow-left.png" class="slider-my-arrow-left"></img>',
                '<img src="/static/imgs/icons/arrow-right.png" class="slider-my-arrow-right"></img>',
            ],
            dots: !1,
            center: !0,
            responsive: {
                0: { items: 1 },
                600: { items: 2 },
                1e3: { items: 4 },
            },
        }),
        AOS.init();
});