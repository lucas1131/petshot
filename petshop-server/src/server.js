
// Tutorial: https://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm
// RESTful API
// GET − Provides a read only access to a resource.
// PUT − Used to create a new resource.
// DELETE − Used to remove a resource.
// POST − Used to update an existing resource or create a new resource.
// OPTIONS − Used to get the supported operations on a resource.

var express = require('express');
var fs = require("fs");

var app = express();

var user = {
	"user4" : {
		"name" : "mohit",
		"password" : "password4",
		"profession" : "teacher",
		"id": 4
	}
}

/* Users API */
// List users in system
app.get('/listUsers', (req, res) => {
	fs.readFile(__dirname + "/" + "users.json", 'utf8', (err, data) => {
		console.log(data);
		res.end(data);
	});
})

// Get info from single user
app.get('/:id', function (req, res) {
	// First read existing users.
	fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
		var users = JSON.parse( data );
		var user = users["user" + req.params.id] 
		console.log( user );
		res.end( JSON.stringify(user));
	});
})

// CREATE new user
app.post('/addUser', (req, res) => {
	// First read existing users.
	fs.readFile(__dirname + "/" + "users.json", 'utf8', (err, data) => {
		data = JSON.parse(data);
		data["user4"] = user["user4"];
		console.log(data);
		res.end(JSON.stringify(data));
	});
})

// UPDATE user
app.put('/updateUser', (req, res) => {
	// First read existing users.
	fs.readFile(__dirname + "/" + "users.json", 'utf8', (err, data) => {
		data = JSON.parse(data);
		data["user4"] = user["user4"];
		console.log(data);
		res.end(JSON.stringify(data));
	});
})

// Delete user
app.delete('/deleteUser', function (req, res) {

	// First read existing users.
	fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
		data = JSON.parse( data );
		delete data["user" + 2];
		console.log( data );
		res.end( JSON.stringify(data));
	});
})

/* END USER API */

var server = app.listen(8080, () => {
	var host = server.address().address
	var port = server.address().port
	console.log("Petshop server running @ http://%s:%s", host, port)
})