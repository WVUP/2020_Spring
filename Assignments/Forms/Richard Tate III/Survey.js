console.log('Welcome to JavaScript')

const me = {
    firstName: 'Richard',
    lastName: 'Tate III'
};
console.log(me);

const header = document.getElementById('my-header');
console.log(header);

setTimeout(function(){
    header.innerHTML = "BOO!!!!!"
    header.style.color = 'orange';
}, 5000);


function youTyped(){
    console.log(`Your Input: ${myForm.firstName.value}`);
    document.getElementById('preview').innerHTML = `<h2>Your Input: <span style="color: orange"; text-align: center;>${myForm.firstName.value}</span></h2>`;
}

function validate()
{

var fname = document.forms["myForm"]["firstName"]; 

if (name.value == "")                                  
{ 
    window.alert("Please enter your first name."); 
    name.focus(); 
    return false; 
} 

return true;
}