$(function(){
  $('img').each(function() {
    if ($(this).data('src')) {
      var imgSrc = $(this).data('src');
      $(this).attr('src',imgSrc);
    }
  });
  //navabr search
  var sjs = SimpleJekyllSearch({
    searchInput: document.getElementById('nav-search-input'),
    resultsContainer: document.getElementById('nav-search-results-list'),
    json: '/search.json'
  });
  
});
