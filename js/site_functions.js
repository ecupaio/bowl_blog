$(function(){
  $('img').each(function() {
    if ($(this).data('src')) {
      var imgSrc = $(this).data('src');
      $(this).attr('src',imgSrc);
    }
  });
});
