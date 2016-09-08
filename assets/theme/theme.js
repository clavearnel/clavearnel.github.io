// Theme Panel Open/Close
$("#theme-panel .panel-button").click(function() {
    $("#theme-panel").toggleClass("close-theme-panel", "open-theme-panel", 1000);
    $("#theme-panel").toggleClass("open-theme-panel", "close-theme-panel", 1000);
    return false;
});
//Navigation Color
$("#theme-panel .menu-switcher-black").click(function() {
    $('#navigation').removeClass('white-menu').addClass('dark-menu');
    $('.navbar-brand img').attr('src','assets/images/logo.png');
    $('.logo img').attr('src','assets/images/logo-icon.png');
    return false;
});

$("#theme-panel .menu-switcher-white").click(function() {
    $('#navigation').removeClass('dark-menu').addClass('white-menu');
    $('.navbar-brand img').attr('src','assets/images/logo-dark.png');
    $('.logo img').attr('src','assets/images/logo-icon-dark.png');
    return false;
});

// Color Skins
$('.change-color').click(function() {
    var title = jQuery(this).attr('title');
    jQuery('#change-color').attr('href', 'assets/css/colors/' + title + '.css');
    return false;
});
