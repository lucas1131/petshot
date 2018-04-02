
/* Define groups enum */
var Groups = {
	Anonymous: 0,
	Normal: 1,
	Admin: 2,
};

/* Declare globals */

var modalBox = document.getElementById("signup_form");
var userGroup = localStorage.getItem("user_group");

if(!userGroup) userGroup = Groups.Anonymous;

alert("Current user is: " + userGroup);

/* Change view depending on user type */
var userView;
if(userGroup == Groups.Anonymous)
	userView = document.getElementsByClassName("anonymous_user");
else if(userGroup == Groups.Normal)
	userView = document.getElementsByClassName("normal_user");
else if(userGroup == Groups.Admin)
	userView = document.getElementsByClassName("admin_user");

// Display only the objects for this user's group
for(var i = 0; i < userView.length; i++) 
	userView[i].style.display = "block";

// Display username for user
document.getElementById("logged_name").innerHTML += localStorage.getItem("username")

function login(){

	var username = document.getElementById("login_uname");
	var password = document.getElementById("login_psw");
	var remember = document.getElementById("remember_me");

	alert("Uname: " + username.value + "\tPassword: " + password.value);

	if(username.value == "admin" && password.value == "admin")
		userGroup = Groups.Admin;
	else userGroup = Groups.Normal;

	localStorage.setItem("user_group", userGroup);
	localStorage.setItem("username", username.value);
	location.reload(); 
}

function logout(){
	userGroup = Groups.Anonymous;
	localStorage.setItem("user_group", userGroup);
	location.reload();
}

function signup_form(){
	localStorage.setItem("user_group", Groups.Anonymous);
	modalBox.style.display = "block";
}

function cancel_signup(){
	modalBox.style.display = "none";
}

// When the user clicks anywhere outside of the modal content, close it
window.onclick = function(event) {
    if (event.target == modalBox) {
        modalBox.style.display = "none";
    }
}