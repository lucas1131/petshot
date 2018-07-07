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