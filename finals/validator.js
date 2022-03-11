function validateForm() {
//validateForm is in a way the ID of the submit button in the html page
var validFirstname=false;
var validLastname=false;
var validEmail=false;
var validComment=false;
// vars at the bottom get the value from the ID in the html webpage/input text  by the user
var firstname = document.getElementById("FirstName").value;
var lastname = document.getElementById("LastName").value;
var userEmail = document.getElementById("Email").value;
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
var comment = document.getElementById("Comment").value
//Uses the information of the vars/ID's to create an if statement/condition. Skips the else true statement
//if it doesn't fill conditions and Returns false/the validateForm/ the onsubmitButton in the html
//, if it is not True, making it not submit.Otherwise, it will return it true first and submit.
if (firstname==="null" || firstname==="" || firstname.length > 20) {
    errorMessages += "<p>The First Name is required and cannot be greater than 20 characters</p>";
}
else {
   validFirstname = true;
}
if (lastname==="null" || lastname==="" || lastname.length > 20) {
    errorMessages += "<p>The Last Name is required and cannot be greater than 20 characters</p>";
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
if (comment==="null" || comment==="" || comment.length > 40) {
    errorMessages += "<p>Comment is required and cannot be greater than 40 characters</p>";
}
else{
   validComment = true;
}
document.getElementById("errorMessages").innerHTML = errorMessages;

return (validFirstname && validLastname && validEmail && validComment);
}

const d = new Date();
document.getElementById("date").innerHTML = d;