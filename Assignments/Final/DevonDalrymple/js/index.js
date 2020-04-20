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

function openNav() {
    document.getElementById("mySidenav").style.width = "220px";
}
  
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}