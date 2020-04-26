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
    document.getElementById("mySidenav").style.width = "220px";
    var elements = document.querySelectorAll('.sideText');
    for(var i=0; i<elements.length; i++){
    elements[i].style.visibility = "visible";
}
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "80px";
    var elements = document.querySelectorAll('.sideText');
        for(var i=0; i<elements.length; i++){
        elements[i].style.visibility = "hidden";
}
}
