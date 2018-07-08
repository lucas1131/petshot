/* User RESTful API for Petshop application
 *
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Luca Gomes Urssi 10425396
 * Rafael do Fake News 9293095
 *
 */


let server = require('./server')

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

function ListUsers(req, res) {
	
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
}

function GetUser(req, res) {
	
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
}

function CreateUser(req, res){

	print("[Info] POST '" + req.originalUrl + "'")
	let id = req.params.id
	server.getDoc(id).then((doc) => {
		
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
}

function UpdateUser(req, res) {

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
}

function DeleteUser(req, res) {

	print("[Info] DELETE '" + req.originalUrl + "'")
	
	let user = req.params.id;
	getRev(user).then((rev) => {

		print("[Info] Found rev = '" + req.originalUrl + "' for user '" + user + "'")
		db.destroy(user, rev, function(err, body) {
			if (!err) {
	    		print(body)
	    		res.end(JSON.stringify({ok: true, msg: "SUCCESS"}, null, 4))
	    	}
	    	else {
	    		print(err);
	    		res.end(JSON.stringify(err))
	    		throw err.Error
	    	}
		});
	})
}

/* Export API functions */
exports.ListUsers = ListUsers
exports.GetUser = GetUser
exports.CreateUser = CreateUser
