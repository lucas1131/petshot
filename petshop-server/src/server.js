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

/* Aliases, libraries and globals */
var print = console.log

let express = require('express');
let fs = require("fs");
let prom_nano = require('nano-promises');
let nano = require("nano")("http://localhost:5984");
let db = null
let pdb = null

// Try to create db, if it doesnt exists
nano.db.create("petshop", (err, bode) => {
	
	if(err){
		// Error 412 - Database exists
		if(err.statusCode == 412){
			print("[Info] Found database for 'petshop'.")
			// Load Petshop database and promisified db
			db = nano.use("petshop") 
			pdb = prom_nano(nano).db.use("petshop") 
			return

		} else if(err.statusCode != 412){
			print("[Error] Unknown error occured.")
			print(err)
			throw err.Error
		}
	} 

	print("[Info] Created database for 'petshop'.")
	// Load Petshop database and promisified db
	db = nano.use("petshop") 
	pdb = prom_nano(nano).db.use("petshop") 
	
})

let app = express();
/* END Aliases, libraries and globals */


/* CouchDB synchronized utilities*/
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

// TODO: probably move this to another file
// List users in system
app.get('/listUsers', (req, res) => {
	
	let id = req.params.id
	let users = []
	db.fetch({include_docs: true}, (err, bode) => {

		if(err){
			print(err)
			// Send error msg
			res.end(JSON.stringify({
				ok: false, 
				msg: "UNKNOWN ERROR",
			}, null, 4))

			return
		}

		// No error
		print(bode)
		bode.rows.forEach((row) => {
			print(row)
			print(row.doc)
			if(row.doc.dbtype == "user"){
				
				users.push(row.id)
				print(row.id)
			}
		})

		// Send object to resquester
		res.end(JSON.stringify({
			ok: true, 
			msg: "SUCCESS",
			got: users
		}, null, 4))

	})
})

// Get info from single user
app.get('/user/:id', (req, res) => {
	
	let id = req.params.id
	pdb.get(id).then((doc) => {

		doc = doc[0]

		// Remove db properties
		delete doc._id
		delete doc._rev

		print(doc)
		// Send object to resquester
		res.end(JSON.stringify({
			ok: true, 
			msg: "SUCCESS",
			got: doc
		}, null, 4))

	}).catch((err) =>{
		print(err)
		// Send error msg
		res.end(JSON.stringify({
			ok: false, 
			msg: "NO DOC FOUND WITH ID '" + id + "'"
		}, null, 4))
	})
})

// CREATE new user
app.post('/addUser/:id', (req, res) => {

	print("[Info] POST '" + req.originalUrl + "'")
	let id = req.params.id
	getDoc(id).then((doc) => {
		
		let user = {}

		// Only get revision if doc exists
		if(doc != undefined) {
			
			print(doc)
			user = doc
			user["_rev"] = doc._rev;
			user["dbtype"] = "user"

		} else {
			user["_id"] = id
			print("[Info] No doc with id '" + id + "'")
		}

		// Copy query attributes to user object
		// TODO: use deepcopy - when updating animolz (an array) we cant just do
		// user["animolz"] = query["animolz"], we will lose all previous animolz
		for(let attr in req.query){
			
			print(req.query[attr])
			
			// Try to parse objects parameters to interpret arrays as real 
			// arrays, not strings
			try { user[attr] = JSON.parse(req.query[attr]) }
			// If parsing failed, its not an object, just read it
			catch { user[attr] = req.query[attr] }

		}

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

		// If doc doesnt exists, return error - PUT is only for updating.
		if(!doc) {
			res.end(JSON.stringify({
				ok: false, 
				msg: "NO DOCUMENT WITH ID '" + id +"'"
			}, null, 4))
			return
		}
		
		let user = doc
		user["dbtype"] = "user"
		print(doc)

		user["_rev"] = doc._rev;

		// Copy query attributes to user object
		// TODO: use deepcopy - when updating animolz (an array) we cant just do
		// user["animolz"] = query["animolz"], we will lose all previous animolz
		for(let attr in req.query){
			
			print(req.query[attr])
			
			// Try to parse objects parameters to interpret arrays as real 
			// arrays, not strings
			try { 
				let obj = JSON.parse(req.query[attr])
				print(obj)
				user[attr] = obj
			
			// If parsing failed, its not an object, just read it
			} catch { user[attr] = req.query[attr] }
		}

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

	print("[Info] DELETE '" + req.originalUrl + "'")
	
	let user = req.params.id;
	getRev(user).then((rev) => {

		print("[Info] Found rev = '" + req.originalUrl + "' for user '" + user + "'")
		db.destroy(user, rev, function(err, body) {
			if (!err)
	    		console.log(body);
	    	else {
	    		print(err);
	    		res.end(JSON.stringify(err));
	    	}
		});
	})
})
/* END USER API */

let server = app.listen(8080, () => {
	let host = server.address().address
	let port = server.address().port
	console.log("Petshop server running @ http://%s:%s", host, port)
})