
var total;

var firstName;
var lastName;
var vert;
var descriptor;

function compile()
{
    firstName = form.fName.value;
    lastName = form.lName.value;
    vert = form.vert.value;
    descriptor = form.attr.value;

    display();
}

function display()
{
    document.getElementById("data retrieval").innerHTML = firstName + " " + lastName + " you are an " + vert + " sociopath who " + descriptor;
    setTimeout(() => delayedDisplay(), 5000);
}

function delayedDisplay()
{
    document.getElementById("data retrieval").innerHTML += "<br>" + "plot twist, everyone is a sociopath";
}