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
// OPTIONS − Used to create a new resource.
// DELETE − Used to remove a resource.
// POST − Used to update an existing resource or create a new resource.
// PUT − Used to get the supported operations on a resource.

var print = console.log

let express = require('express');
let fs = require("fs");

// Super safe and secure credentials c:
let super_secure_and_safe_credentials = {
	user: "admin",
	password: "admin"
}
let u = super_secure_and_safe_credentials.user
let p = super_secure_and_safe_credentials.password
let nano = require("nano")("http://"+u+":"+p+"@localhost:5984");
let db = nano.use("petshop") // Load Petshop database for use

let app = express();


var user_rev = null
var foo = null
db.fetch({keys: ["users"]}, callback=(err, body) => {
	if(err) print(err)
	else {
		try {
			print(body)
			print()
			print(body.rows[0])
			print()
			user_rev = body.rows[0].doc._rev
			print(user_rev)
			print()
		} catch {

		}
	}
})

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
app.get('/user/:id', (req, res) => {
	let users = db.get("users", (err, body) => {
		if(err) print(err)
		else print(body)
	})

	res.end(users[req.params.id])
})

// CREATE new user
app.post('/addUser/:id', (req, res) => {
	
/*
	Request example:
	some useful variables

	               id   parameters
	URL: /addUser/test?user=test&username=test&password=test

	// references /:id
	params: { id: 'test' } 

	// URL parameters after '?' mark
	query:  { 
		user: 'test', 
		username: 'test', 
		password: 'test' 
	} 

*/	
	print("[Info] POST '" + req.originalUrl + "'")
	let user = {
		_id: "users",
		_rev: user_rev
	}
	user[req.params.id] = req.query
	
	print(user)
	res.end("" + req)
	// print(req)

	db.insert(user, "users", (err, body) => {
		if(err) print(err)
		else {
			print(body)
			user_rev = body.rev
		}
	})

	// TODO: Read user info from database to create new user
		// Example: let user = users[req.params.id]

	// // First read existing users.
	// fs.readFile(__dirname + "/" + "users.json", 'utf8', (err, data) => {
	// 	data = JSON.parse(data);
	// 	data["user4"] = user["user4"];
		
	// 	console.log("[Info] TODO!");
	// 	console.log("[Info] POST: Creating user '" + req.params.id + "'");
	// 	console.log(data);
	// 	res.end(JSON.stringify(data, null, 4));
	// });
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