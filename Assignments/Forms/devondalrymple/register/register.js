var genderType;
function showInput() {
    // https://www.geeksforgeeks.org/how-to-get-value-of-selected-radio-button-using-javascript/
    
    
    var genderList = document.getElementsByName("gender"); 
    
    for(i = 0; i < genderList.length; i++) { 
        if(genderList[i].checked) {
            genderType = genderList[i].value;
            break;
        }
    } 

    
    

    document.getElementById('display').innerHTML = 
                "Email: " + document.getElementById("email").value + "<br>" +
                "Username: " + document.getElementById("user").value + "<br>" +
                "Password: " + document.getElementById("password").value + "<br>" +
                "Name: " + document.getElementById("fname").value + "&nbsp;" +
                document.getElementById("mname").value + "&nbsp;" +
                document.getElementById("lname").value + "<br>" +
                "Home Address: " + document.getElementById("homeaddress").value + "<br>" +
                "Phone Number: " + document.getElementById("phone").value + "<br>" +
                "Gender: " + genderType + "<br>" +
                "Date of Birth: " + document.getElementById("birthday").value + "<br>";
}

// https://www.codespeedy.com/stop-form-submission-using-javascript-preventdefault-event-method/