$('document').ready(function() {


  $('.header-menu').click(function() {
    $('.topmenu').slideToggle();

    var whichImage = $(this).children('img').attr('src');

    if (whichImage == 'img/icon-menu-open.svg') {
      $(this).children('img').attr('src', 'img/icon-menu-closed.svg');
    } else {
      $(this).children('img').attr('src', 'img/icon-menu-open.svg');
    }
  });

  $('.cover').hover(
      function(){
        // $(this).fadeTo('slow', 0.15);
        $(this).find('.div-text').fadeTo('slow',1.0);
        $(this).find('.cover-fader').fadeTo('slow',0.6);
      }
      ,
      function(){
        $(this).find('.div-text').fadeTo('slow',0.0);
        $(this).find('.cover-fader').fadeTo('slow',0.0);
      }
  );




});
