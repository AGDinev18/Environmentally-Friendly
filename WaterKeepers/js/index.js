/* The function if you click the Stories button */
function slideToNews() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#stories").offset().top - 100,
        easing: "easeInOutQuart"
    }, 1000);
}
/* The function if you click the About button*/
function slideToAbout() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#about").offset().top - 100,
        easing: "easeInOutQuart"
    }, 1000);
}
/* If you click the About or the Stories button animation will appear that will automatically scroll and bring you to the articles or to the about divs*/
$(function() {
    var hash = window.location.hash;
    if (hash === "#news-slide") {
        slideToNews();
    } else if (hash === "#about-slide") {
        slideToAbout();
    }

    $("#go-to-stories").click(function() {
        slideToNews();
    });
    $("#go-to-about").click(function() {
        slideToAbout();
    });
});

/* Note: this works only for the main pages. If you are reading some of the stories and decade to click on one of these buttons, it will bring you directly to the about div or to the stories without animation */