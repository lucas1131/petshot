
var Groups = {
	Anonymous: 1,
	Normal: 2,
	Admin: 3,
};

var modalBox = document.getElementById("signup_form");
var userGroup = Groups.Anonymous;

function login(username, password){
	if(username == "admin" && password == "admin")
		userGroup = Groups.Admin;
	else userGroup = Groups.Normal;

	location.reload(); 
}

function signup_form(){
	modalBox.style.display = 'block';
}

function cancel_signup(){
	modalBox.style.display = 'none'
}

// When the user clicks anywhere outside of the modal content, close it
window.onclick = function(event) {
    if (event.target == modalBox) {
        modalBox.style.display = "none";
    }
}