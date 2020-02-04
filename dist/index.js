function slideToNews() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#stories").offset().top - 100,
        easing: "easeInOutQuart"
    }, 1000);
}

function slideToAbout() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#about").offset().top - 100,
        easing: "easeInOutQuart"
    }, 1000);
}

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