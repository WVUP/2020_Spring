var toggled = false;

function expand()
{
    if (toggled == true)
    {
        toggled = false
        document.getElementById("SB").innerHTML = '<i class="fa fa-scribd fa-2x" aria-hidden="true" style="color: black;"></i>'
        document.getElementById("home").innerHTML = '<i class="fa fa-home fa-2x" aria-hidden="true" style="color: black;"></i>'
        document.getElementById("explore").innerHTML = '<i class="fa fa-hashtag fa-2x" aria-hidden="true" style="color: black;"></i>'
        document.getElementById("shop").innerHTML = '<i class="fa fa-shopping-cart fa-2x" aria-hidden="true" style="color: black;"></i>'
        document.getElementById("adopt").innerHTML = '<i class="fa fa-paw fa-2x" aria-hidden="true" style="color: black;"></i>'
        document.getElementById("music").innerHTML = '<i class="fa fa-headphones fa-2x" aria-hidden="true" style="color: black;"></i>'
        document.getElementById("search").innerHTML = '<i class="fa fa-search fa-2x" aria-hidden="true" style="color: black;"></i>'
        document.getElementById("profile").innerHTML ='<i class="fa fa-user fa-2x" aria-hidden="true" style="color: black;"></i>'
    }
    else if (toggled == false)
    {
        toggled = true;
        document.getElementById("SB").innerHTML += "toryboard"
        document.getElementById("home").innerHTML += "Home"
        document.getElementById("explore").innerHTML += "Explore"
        document.getElementById("shop").innerHTML += "Shop"
        document.getElementById("adopt").innerHTML += "Adopt"
        document.getElementById("music").innerHTML += "Music"
        document.getElementById("search").innerHTML += '<form><input type="text" placeholder="Search"></form>'
        document.getElementById("profile").innerHTML += "Profile"
    }
}

profile = 
{
fname: "Final",
lname: "Project"
}

post =
{
poster: "John Doe",
title: "Post Test",
description: "This is a test of the javascript generated posts",
image: "https://www.squishable.com/mm5/graphics/00000001/comfortfood_pickle.jpg"
}

function populate()
{
    document.getElementById("poster").innerHTML = post.poster
    document.getElementById("title").innerHTML = post.title
    document.getElementById("image").src = post.image
    document.getElementById("description").innerHTML = post.description

    document.getElementById("poster").id = "populated"
    document.getElementById("title").id = "populated"
    document.getElementById("image").id = "populated"
    document.getElementById("description").id = "populated"
}

function generate()
{
    document.getElementById("new posts").innerHTML += 
    '<div class="row">' +
    '<p class="post">' +
        '<label for="post" id="poster" style="font-weight: bold;">current test</label>' +
        '<label for="title" id="title" style="margin-left: 20%; font-weight: bold;">test me</label>' +
        '<br>' +
        '<img src="" alt="image here" style="margin-right: 10%; height: 50px;" id="image">' +
        '<span id="description">description here</span>' + 
    '</p>' +
    '</div>'
}

document.getElementById("name").innerHTML = profile.fname + " " + profile.lname