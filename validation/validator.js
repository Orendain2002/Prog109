function validateForm() {
var validFirstname=false;
var validLastname=false;
var validEmail=false;
var validPhone=false;
var validUsername=false;
var validPasswrod=false;

var firstname = document.getElementById("FirstName").value;
var lastname = document.getElementById("LastName").value;
var userEmail = document.getElementById("Email").value;
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
var phone = document.getElementById("Phone").value;
var username = document.getElementById("Username").value;
var password = document.getElementById("Password").value;

if (firstname==="null" || firstname==="" || firstname.length > 20) {
    errorMessages += "<p>The firstname is required and cannot be greater than 20 characters</p>";
}
if (lastname==="null" || lastname==="" || lastname.length > 20) {
    errorMessages += "<p>The lastname is required and cannot be greater than 20 characters</p>";
}
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
    errorMessages += "<p>Invalid email</p>";
}
if (isNaN(phone) || phone.lenght >15 || phone===null || phone==="") {
   errorMessages += "<p>Invalid phone number </p>";
}
if (username==="null" || username==="" || username.length > 12) {
    errorMessages += "<p>The username is required and cannot be greater than 12 characters</p>";
}
if (password==="null" || password==="" || password.length > 7) {
    errorMessages += "<p>The password is required and cannot be greater than 7 characters</p>";
}
else {
   validFirstname = true;
   validLastname = true;
   validEmail = true;
   validPhone = true;
   validUsername = true;
   validPassword = true;
}

document.getElementById("errorMessages").innerHTML = errorMessages;

return (validFirstname);
return (validLastname);
}