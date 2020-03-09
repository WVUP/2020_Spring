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
     firstName = myForm.firstName.value;
     lastName = myForm.lastName.value;
     sex = myForm.sex.value;
     age = myForm.age.value;
     hobby = myForm.hobby.value;
     affiliation =myForm.affiliation.value;
     hope = myForm.hope.value
      display();
 }
function display()
{
    document.getElementById("data").innerHTML = firstName + " " + lastName + " " + sex + " " + age + " " + hobby + " " + affiliation;
 
}
