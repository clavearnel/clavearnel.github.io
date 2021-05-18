$(document).ready(function() {

});

$('.navbar, #backtotop').hide();
/*home max height*/
var h = $(window).height();
$(".home .logo").css("height", h);

/*navbar and backtotop show on scroll*/
$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('.navbar, #backtotop').fadeIn(500);
    } else {
        $('.navbar, #backtotop').fadeOut(500);
    }
});
/*render data from data.json*/
$.getJSON('assets/data.json', function(data) {
    var output = '';
    $.each(data, function(key, val) {
        console.log(val.type)
        if (val.media == "y") {
            output += '<div class="item boxed-item col-xs-4 ' + val.type + '">';
            output += '    <div class="item-inner">';
            output += '        <a href="assets/images/portfolio/projects/' + val.item + '.jpg" title="' + val.text + ' (' + val.asset.link + ')" class="work-image ex-link" data-lightbox="' + val.type + '">';
            output += '            <img src="assets/images/portfolio/projects/thumb/' + val.item + '.jpg" alt="" />';
            output += '            <div class="item-details">';
            output += '                <h1 class="oswald uppercase white">' + val.headline + '</h1>';
            output += '                <span class="portfolio-strips">+</span>';
            output += '                <p class="oswald uppercase">' + val.type + '</p>';
            output += '            </div>';
            output += '        </a>';
            output += '    </div>';
            output += '</div>';
        }
    });
    $('.portfolio-items').html(output);
    masonry();
});

function masonry() {
    var $container = $('.portfolio-items');
    $container.isotope({
        masonry: { columnWidth: $container.width() / 6 },
        itemSelector: '.item',
        filter: '' +
            '.website',
    });
    var $optionSets = $('#options .option-set'),
        $optionLinks = $optionSets.find('a');
    $optionLinks.click(function() {
        var $this = $(this);
        // don't proceed if already selected
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            // changes in layout modes need extra logic
            changeLayoutMode($this, options)
        } else {
            // otherwise, apply new options
            $container.isotope(options);
        }
        return false;
    });
}

/*animated effect on scroll*/
wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 200, // default
    mobile: true, // default
    live: true // default
})
wow.init();