$(document).ready(function(){
    var screen = $(window)
    if (screen.width() > 900) {
        $(".ingredients").stick_in_parent();
    }
});
$(window).on('orientationchange', function(event) {
    var screen = $(window)
    if (screen.width() > 900) {
        $(".ingredients").stick_in_parent();
    }
});    
$(document).resize(function(){
    var screen = $(window)
    if (screen.width() > 900) {
        $(".ingredients").stick_in_parent();
    }
});
