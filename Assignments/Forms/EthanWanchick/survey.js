var total;
 
var firstName;
var lastName;
var sex;
var age;
var hobby;
var affiliation;
var hope;
 function compile()
 {
     firstName = form.firstName.value;
     lastName = form.lastName.value;
     sex = form.sex.value;
     age = form.age.value;
     hobby = form.hobby.value;
     affiliation = form.affiliation.value;
     hope = form.hope.value
      display();
 }
function display()
{
    document.getElementById("data").innerHTML = firstName + " " + lastName + " " + sex + " " + age + " " + hobby + " " + affiliation;
 
}
