// Handles javascript that appears on most pages
var sideToggled;

$(document).ready(function () {
    sideToggled = false;

});
// https://www.w3schools.com/howto/howto_js_sidenav.asp
//Side Navbar Functions

function toggleNav() {
    if (sideToggled) {
        closeNav();
        sideToggled = false;
    }
    else {
        openNav();
        sideToggled = true;
    }
}

// https://stackoverflow.com/questions/23348456/modify-css-classes-using-javascript
function openNav() {
    document.getElementById("mySidenav").style.width = "10%";
    var elements = document.querySelectorAll('.sideText');
    for(var i=0; i<elements.length; i++){
    elements[i].style.visibility = "visible";
}
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "5%";
    var elements = document.querySelectorAll('.sideText');
        for(var i=0; i<elements.length; i++){
        elements[i].style.visibility = "hidden";
}
}
