$(document).on('ready', function () {
    
    var $topHeader = $('#top-header');
    var $rozeBadge = $('.roze_badge');
    var $popup = $('.popup');
    var $popupPhilosophy = $('#popup_philosophy');
    var show = false;
    
    // setup header affix
    $topHeader.affix({
        offset: {
            // get the heigth of the top header
            // to set the top offset of the affix header
            top: $topHeader.height() - 191
        }
    });
    
    // roze badge show/hide toggle
    $('.roze_badge').on('click', function () {
        $('img', this).toggleClass('hidden');
    });
    
    // popups toggler
    $('#popup_handler').on('click', function () {
        
        // TODO normalize before toggle
        if (!show) {
            $popup.show();
            show = true;
        } else {
            $popup.hide();
            show = false;
        }
    });
    
    // popups toggler
    $popup.on('click', function () {
        $(this).hide();
    });
    
    // vaklist toggler
    $('#btn_vaklist').on('click', function () {
        $('#popup_vaklist').toggle();
    });
    
    // info toggler
    $('#info-badge').on('click', function () {
        $popupPhilosophy.toggle();
    });
    
    // info toggler
    $popupPhilosophy.on('click', function () {
        $(this).hide();
    });
});