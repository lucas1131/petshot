/* Simple RESTful server for Petshop application
 *
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Luca Gomes Urssi 10425396
 * Rafael do Fake News 9293095
 *
 */

// RESTful API
// GET − Provides a read only access to a resource.
// POST − Used to create a new resource.
// PUT − Used to update an existing resource or create a new resource.
// DELETE − Used to remove a resource.

/* Aliases, libraries and globals */
print = console.log
db = null
pdb = null

let express = require('express');
let prom_nano = require('nano-promises');
let nano = require("nano")("http://localhost:5984");

let usersApi =  require('./users')

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

/* Export some methods and variables*/
// exports.db = db
// exports.pdb = pdb
exports.getRev = getRev
exports.getDoc = getDoc


/* USER API*/
app.get('/users', usersApi.ListUsers)         // List users in system
app.get('/users/:id', usersApi.GetUser)       // Get info from single user
app.post('/addUser/:id', usersApi.CreateUser) // CREATE new user
app.put('/updateUser/:id', UpdateUser)        // UPDATE user
app.delete('/deleteUser/:id', DeleteUser)     // Delete user
/* END USER API */

let server = app.listen(8080, () => {
	let host = server.address().address
	let port = server.address().port
	print("Petshop server running @ http://%s:%s", host, port)
})