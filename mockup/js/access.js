/* Petshop Access source file
 *
 * This file handles sign up and login information.
 *
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Luca Gomes Urssi 10425396
 * Rafael do Fake News 9293095
 *
 */


/* Define groups enum */
var Groups = {
	Anonymous: 0,
	Normal: 1,
	Admin: 2
};

/* Declare globals */

var SIGNUP_FORM = "signup_form";
var userGroup = localStorage.getItem("user_group");

if(!userGroup) userGroup = Groups.Anonymous;

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

	// TODO: remember me check
	var username = document.getElementById("login_uname");
	var password = document.getElementById("login_psw");
	var remember = document.getElementById("remember_me");

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

function signup(){

	
}

function signup_form(){
	localStorage.setItem("user_group", Groups.Anonymous);
	document.getElementById(SIGNUP_FORM).style.display = "block";
}

function cancel_signup(){
	document.getElementById(SIGNUP_FORM).style.display = "none";
}

// When the user clicks anywhere outside of the modal content, close it
window.onclick = function(event) {
    if (event.target == document.getElementById(SIGNUP_FORM)) {
        document.getElementById(SIGNUP_FORM).style.display = "none";
    }
}