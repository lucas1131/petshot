/* Services RESTful API for Petshop application
 *
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Luca Gomes Urssi 10425396
 * Rafael do Fake News 9293095
 *
 */


let server = require('./server')

function ListServices(req, res) {
	
	let id = req.params.id
	let services = []
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
			if(row.doc.dbtype == "service"){
				
				services.push(row.id)
				print(row.id)
			}
		})

		// Send object to resquester
		res.end(JSON.stringify({
			ok: true, 
			msg: "SUCCESS",
			got: services
		}, null, 4))
	})
}

function GetService(req, res) {
	
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

function CreateService(req, res){

	print("[Info] POST '" + req.originalUrl + "'")
	let id = req.params.id
	server.getDoc(id).then((doc) => {
		
		let service = {}

		// Only get revision if doc exists
		if(doc != undefined) {
			
			print(doc)
			service = doc
			service["_rev"] = doc._rev;
			service["dbtype"] = "service"

		} else {
			service["_id"] = id
			print("[Info] No doc with id '" + id + "'")
		}

		// Copy query attributes to service object
		// TODO: use deepcopy - when updating animolz (an array) we cant just do
		// service["animolz"] = query["animolz"], we will lose all previous animolz
		for(let attr in req.query){
			
			print(req.query[attr])
			
			// Try to parse objects parameters to interpret arrays as real 
			// arrays, not strings
			try { service[attr] = JSON.parse(req.query[attr]) }
			// If parsing failed, its not an object, just read it
			catch { service[attr] = req.query[attr] }

		}

		print("[Info] Inserting service: " + JSON.stringify(service, null, 4))
		db.insert(service, id, (err, body) => {
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

function UpdateService(req, res) {

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
		
		let service = doc
		service["dbtype"] = "service"
		print(doc)

		service["_rev"] = doc._rev;

		// Copy query attributes to service object
		// TODO: use deepcopy - when updating animolz (an array) we cant just do
		// service["animolz"] = query["animolz"], we will lose all previous animolz
		for(let attr in req.query){
			
			print(req.query[attr])
			
			// Try to parse objects parameters to interpret arrays as real 
			// arrays, not strings
			try { 
				let obj = JSON.parse(req.query[attr])
				print(obj)
				service[attr] = obj
			
			// If parsing failed, its not an object, just read it
			} catch { service[attr] = req.query[attr] }
		}

		print("[Info] Inserting service: " + JSON.stringify(service, null, 4))
		db.insert(service, id, (err, body) => {
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

function DeleteService(req, res) {

	print("[Info] DELETE '" + req.originalUrl + "'")
	
	let service = req.params.id;
	getRev(service).then((rev) => {

		print("[Info] Found rev = '" + req.originalUrl + "' for service '" + service + "'")
		db.destroy(service, rev, function(err, body) {
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
exports.ListServices = ListServices
exports.GetService = GetService
exports.CreateService = CreateService
exports.UpdateService = UpdateService
exports.DeleteService = DeleteService
