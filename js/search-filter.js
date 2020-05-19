
$(function() {
  var sjs = SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('search-results-list'),
    json: '/search.json'
  });
  $('#search-form').submit(function(e) {
    e.preventDefault();
    var query = $('#search-input').val();
    sjs.search(query);
  });
  $('.filter-btn').click(function(e) {
    var filter = $(this).text();

    if ($(this).hasClass('reversed')) {
      $(this).removeClass('reversed');
      $('.filter-btn').not(this).addClass('reversed');
      $('.recipe-col').each(function(i,obj) {

        if ($(this).find('.recipe-tags').text().indexOf(filter) > -1) {
          $(this).removeClass('hidden');
        } else {
          $(this).addClass('hidden');
        }
        if (filter.indexOf("All") > -1) {
          $('.recipe-col').removeClass('hidden');
        } else {

        }
      });
    } else {
      $('.recipe-col').removeClass('hidden');
      $(this).addClass('reversed');
    }

  });
});
