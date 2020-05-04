

$(document).ready(function () {
    // Add active class to the current button (highlight it)
    var btnContainer = document.getElementById("list-tab");
    var btns = btnContainer.getElementsByClassName("list-group-item");
    for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
  });
  }
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

// https://www.w3schools.com/howto/howto_js_filter_lists.asp - Third Times a Charm
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

  
  filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("spacedCards");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    cardRemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) cardAddClass(x[i], "show");
  }
}

// Show filtered elements
function cardAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function cardRemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

