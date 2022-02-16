function validateForm() {
var validFirstname=false;
var validLastname=false;
var validEmail=false;
var validPhone=false;
var validUsername=false;
var validPassword=false;
var validCountry=false;
var validZipcode=false;

var firstname = document.getElementById("FirstName").value;
var lastname = document.getElementById("LastName").value;
var userEmail = document.getElementById("Email").value;
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
var phone = document.getElementById("Phone").value;
var username = document.getElementById("Username").value;
var password = document.getElementById("Password").value;
var country = document.getElementById("Country").value;
var zipcode = document.getElementById("Zipcode").value;

if (firstname==="null" || firstname==="" || firstname.length > 20) {
    errorMessages += "<p>The firstname is required and cannot be greater than 20 characters</p>";
}
else {
   validFirstname = true;
}
if (lastname==="null" || lastname==="" || lastname.length > 20) {
    errorMessages += "<p>The lastname is required and cannot be greater than 20 characters</p>";
}
else {
   validLastname = true;
}
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
    errorMessages += "<p>Invalid email</p>";
}
else {
   validEmail = true;
}
if (isNaN(phone) || phone.length >15 || phone===null || phone==="") {
   errorMessages += "<p>Invalid phone number </p>";
}
else {
   validPhone = true;
}
if (username==="null" || username==="" || username.length > 12) {
    errorMessages += "<p>The username is required and cannot be greater than 12 characters</p>";
}
else{
   validUsername = true;
}
if (password==="null" || password==="" || password.length > 7) {
    errorMessages += "<p>The password is required and cannot be greater than 7 characters</p>";
}
else{
   validPassword = true;
}
if (country === "USA") {
   errorMessages += "<p>Zipcode is required</p>"
}
else{
   validCountry = true;
}
if (zipcode.length > 5) {
   errorMessages += "<p>Zipcode cannot be greater than 5 digits.</p>"
}
else {
   validZipcode = true;
}
document.getElementById("errorMessages").innerHTML = errorMessages;

return (validFirstname && validLastname && validEmail && validPhone && validUsername && validPassword && validZipcode);
}
