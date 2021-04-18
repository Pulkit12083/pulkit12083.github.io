var $el1;
var $el2;

setInterval(function() {
    $el1 = $('.bg-container.active');
    $el2 = $('.bg-container:not(.active');
    $el1.removeClass('active');
    $el2.addClass('active');
}, 2000);
