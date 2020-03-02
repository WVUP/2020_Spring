var total;
 
var firstName;
var lastName;
var sex;
var age;
var hobby;
var affiliation;
 function compile()
 {
     firstName = form.fName.value;
     lastName = form.lName.value;
     sex = form.sex.value;
     age = form.age.value;
     hobby = form.hobby.value;
     affiliation = form.affiliation.value;
      display();
 }
function display()
{
    document.getElementById("data").innerHTML = firstName + " " + lastName + " " + sex + " " + age + " " + hobby + " " + affiliation;
 
}
