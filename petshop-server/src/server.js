/* Simples RESTful server for Petshop application
 *
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Luca Gomes Urssi 10425396
 * Rafael do Fake News 9293095
 *
 */

// Tutorial: https://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm
// RESTful API
// GET − Provides a read only access to a resource.
// PUT − Used to create a new resource.
// DELETE − Used to remove a resource.
// POST − Used to update an existing resource or create a new resource.
// OPTIONS − Used to get the supported operations on a resource.

let express = require('express');
let fs = require("fs");

let app = express();


/* Users API */
// TODO: probably move this to another file
// List users in system
app.get('/listUsers', (req, res) => {
	fs.readFile(__dirname + "/" + "users.json", 'utf8', (err, data) => {
		console.log("[Info] GET: Listing all existing users");
		console.log(data);
		res.end(data);
	});
})

// Get info from single user
app.get('/:id', (req, res) => {
	// First read existing users.
	fs.readFile(__dirname + "/" + "users.json", 'utf8', (err, data) => {
		
		let users = JSON.parse(data);
		let user = users[req.params.id]
		
		if (user){
			console.log("[Info] GET: Getting user: " + req.params.id);
			console.log(user);
			res.end(JSON.stringify(user, null, 4));
		} else {
			console.log("[Info] GET: Unknown user '" + req.params.id + "'");
			res.end(JSON.stringify(user, null, 4));
		}
	});
})

// CREATE new user
app.post('/addUser/:id', (req, res) => {
	
	// TODO: Read user info from database to create new user
		// Example: let user = users[req.params.id]

	// First read existing users.
	fs.readFile(__dirname + "/" + "users.json", 'utf8', (err, data) => {
		data = JSON.parse(data);
		data["user4"] = user["user4"];
		
		console.log("[Info] TODO!");
		console.log("[Info] POST: Creating user '" + req.params.id + "'");
		console.log(data);
		res.end(JSON.stringify(data, null, 4));
	});
})

// UPDATE user
app.put('/updateUser/:id', (req, res) => {
	
	// TODO: Read user info from request to know which user to update
		// Example: let user = users[req.params.id]
		
	// First read existing users.
	fs.readFile(__dirname + "/" + "users.json", 'utf8', (err, data) => {
		data = JSON.parse(data);

		data["user4"] = user["user4"];
		console.log("[Info] TODO!");
		console.log("[Info] PUT: Updating user '" + req.params.id + "'");
		console.log(data);
		res.end(JSON.stringify(data, null, 4));
	});
})

// Delete user
app.delete('/deleteUser/:id', (req, res) => {

	// TODO: Read user info from request to know which user to delete
		// Example: let user = users[req.params.id]
		
	// IMPORTANT: Check who is deleting users (only admins can delete)

	// First read existing users.
	fs.readFile(__dirname + "/" + "users.json", 'utf8', (err, data) => {
		data = JSON.parse(data);
		delete data["user" + 2];
		
		console.log("[Info] TODO!");
		console.log("[Info] DELETE: DELETING user '" + req.params.id + "'");
		console.log(data);
		res.end(JSON.stringify(data, null, 4));
	});
})

/* END USER API */

let server = app.listen(8080, () => {
	let host = server.address().address
	let port = server.address().port
	console.log("Petshop server running @ http://%s:%s", host, port)
})