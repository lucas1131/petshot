function SwitchTheme() {
	
	// Retrieve current theme 
	var currentTheme = localStorage.getItem("theme");
	var link = document.createElement("link");
	link.rel = "stylesheet";
	
	// If never set a theme, default to light theme, else check if its dark
	if(currentTheme === null || currentTheme === "light"){
		currentTheme = "dark";
		link.href = "../css/darkTheme.css";
	} else {
		currentTheme = "light";
		link.href = "../css/lightTheme.css";
	}
	
	// Append stylesheet to html
	document.head.appendChild(link);
	
	// Store
	localStorage.setItem("theme", currentTheme);
}

function SetTheme(theme) {
	
	if(theme !== "dark" && theme !== "light")
		return; // Invalid theme	

	// Retrieve current theme 
	var link = document.createElement("link");
	link.rel = "stylesheet";
	link.href = "../css/" + theme + "Theme.css";
	// Append stylesheet to html
	document.head.appendChild(link);
	
	// alert("current theme: " + theme);
	
	// Store
	localStorage.setItem("theme", currentTheme);
}

// Get theme from local storage
var currentTheme = localStorage.getItem("theme");
if(currentTheme === null) // If no theme is stored, default to light theme
	currentTheme = "light";
SetTheme(currentTheme); 