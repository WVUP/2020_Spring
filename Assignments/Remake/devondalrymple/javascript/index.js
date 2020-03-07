// Run Javascript Code Only if Ready
$( document ).ready(function() {
    // Dropbox Javascript - Set to Open Dropdowns on Hover
    $(".dropdown-trigger").dropdown({hover:true, constrainWidth: false, coverTrigger: false, inDuration: 300, outDuration: 300});
    
    // Slideshow
    var slideIndex = 0;
    carousel();

    function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 5000); // Change image every 2 seconds
    }
});

