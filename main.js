jQuery(document).ready(function() {

	// Open search
    jQuery('.mm-open-search').on('click', function() {
        jQuery('.mm-search-container').addClass('open');
        jQuery('body').addClass('noScroll');
        setTimeout(function(){
            jQuery('.mm-search').addClass('open');
            setTimeout(function() {
                jQuery('.mm-search-input').focus();
            }, 750);
        }, 50);
    });

    jQuery('.mm-search-close').on('click', function() {
        jQuery('.mm-search').removeClass('open');
        jQuery('body').removeClass('noScroll');
        setTimeout(function(){
            jQuery('.mm-search-container').removeClass('open');
        }, 500);
    });

});