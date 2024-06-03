var Common = Common || {};

Common.init = function () {
    if( $('.hover').length ){ this.hover(); }
};

Common.active = function ( el ) {
    var active = $(el);
    active.addClass('active');
};

Common.hover = function () {
    $('.hover').on({
        'mouseenter':function(){
            $(this).css('opacity',.8);
        },
        'mouseleave':function(){
            $(this).css('opacity',1);
        }
    });
};

/* DOM Ready */
$(function($){ Common.init(); });


/* Alert */
function alertMsg(){
	jAlert('ただ今準備中です。<br>募集にあたっては、6月上旬より開始予定です。', '');
}

