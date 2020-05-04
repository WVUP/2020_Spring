

$(document).ready(function () {

});
// https://stackoverflow.com/questions/26178441/how-to-toggle-a-highlighted-selected-item-in-a-group-list - Refactored for below
$(function(){ 
    $('.list-group a').click(function(e) {
        e.preventDefault()
        
        $that = $(this);
        
        $that.parent().find('a').removeClass('active');
        $that.addClass('active');
    });
})

// https://www.w3schools.com/howto/howto_js_filter_lists.asp
function filterFunction() {
    // Declare variables
    var input, filter, div, li, a, i, txtValue;
    input = document.getElementById('mainSearch');
    filter = input.value.toUpperCase();
    debugger;
    div = document.getElementById("market-goods");
    li = div.getElementsByClassName("spacedCards");
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i];
      txtValue = a.title;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "inline";
      } else {
        li[i].style.display = "none";
      }
    }
  }