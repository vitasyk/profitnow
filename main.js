// Accordeon FAQ - что бы скрыть, добавить вконце после .stop() - .hide();
jQuery(document).ready(function($){
    jQuery('#accordion-js').find('.heading').click(function($){
        jQuery(this).toggleClass('accord_active').next().stop().slideToggle();
    }).next().stop();
});