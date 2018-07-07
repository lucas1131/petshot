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
// PUT − Used to update an existing resource or create a new resource.
// POST − Used to create a new resource.
// DELETE − Used to remove a resource.
// OPTIONS − Used to get the supported operations on a resource.

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

let prom_nano = require('nano-promises');
let nano = require("nano")("http://"+u+":"+p+"@localhost:5984");
let db = nano.use("petshop") // Load Petshop database for use
let pdb = prom_nano(nano).db.use("petshop") // Load Petshop database (promisified) for use

let app = express();

async function getRev(id){
	
	let rev = null
	try {
		
		let [doc] = await pdb.get(id)
		rev = doc._rev
		
	} catch(err) {
		print(err)
		print("[Info] No rev for doc '" + id + "'")
		rev = undefined
	}
	return rev
}

async function getDoc(id){
	
	let doc = null
	try { [doc] = await pdb.get(id) } 

	catch(err) {
		print(err)
		print("[Info] No doc with id = '" + id + "'")
		doc = undefined
	}
	return doc
}

/* Users API */
// TODO: probably move this to another file
// List users in system
app.get('/listUsers', (req, res) => {
})

// Get info from single user
app.get('/user/:id', (req, res) => {
	let users = db.get("users", (err, body) => {
		if(err) print(err)
		else print(body)
	})

	res.end(users[req.params.id])
})

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
// CREATE new user
app.post('/addUser/:id', (req, res) => {

	print("[Info] POST '" + req.originalUrl + "'")
	let id = req.params.id
	getDoc(id).then((doc) => {
		
		let user = doc
		print(doc)

		// Only get revision if doc exists
		if(doc != undefined) user["_rev"] = doc._rev;

		// Copy query attributes to user object
		// TODO: use deepcopy - when updating animolz (an array) we cant just do
		// user["animolz"] = query["animolz"], we will lose all previous animolz
		for(let attr in req.query)
			user[attr] = req.query[attr]

		print("[Info] Inserting user: " + JSON.stringify(user, null, 4))

		db.insert(user, id, (err, body) => {
			if(err) {
				print(err)
				res.end(JSON.stringify(err))
			} else {
				print(body)
				res.end(JSON.stringify({ok: true, msg: "SUCCESS"}, null, 4))
			}
		})
	}).catch((err) => { print(err) })
})

// UPDATE user
app.put('/updateUser/:id', (req, res) => {

	print("[Info] PUT '" + req.originalUrl + "'")
	let id = req.params.id
	getDoc(id).then((doc) => {
		
		let user = doc
		print(doc)

		// If doc doesnt exists, return error - PUT is only for updating.
		if(!doc) {
			res.end(JSON.stringify({
				ok: false, 
				msg: "NO DOCUMENT WITH ID '" + id +"'"
			}, null, 4))
			return
		}

		user["_rev"] = doc._rev;

		// Copy query attributes to user object
		// TODO: use deepcopy - when updating animolz (an array) we cant just do
		// user["animolz"] = query["animolz"], we will lose all previous animolz
		for(let attr in req.query)
			user[attr] = req.query[attr]

		print("[Info] Inserting user: " + JSON.stringify(user, null, 4))

		db.insert(user, id, (err, body) => {
			if(err) {
				print(err)
				res.end(JSON.stringify(err))
			} else {
				print(body)
				res.end(JSON.stringify({ok: true, msg: "SUCCESS"}, null, 4))
			}
		})
	}).catch((err) => { print(err) })
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