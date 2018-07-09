/* Product RESTful API for Petshop application
 *
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Luca Gomes Urssi 10425396
 * Rafael do Fake News 9293095
 *
 */


let server = require('./server')

function ListProducts(req, res) {
	
	print("[Info] GET '" + req.originalUrl + "'")

	let id = req.params.id
	let products = []
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
			if(row.doc.dbtype == "product"){
				// Iterate through query parameters to search for given parameters
				let ok = true
				for(let attr in req.query){
					if(row.doc[attr] != req.query[attr])
						ok = false
				}

				// Only add row if matches given parameters
				if(ok) products.push(row)
			}
		})

		// Send object to resquester
		res.end(JSON.stringify({
			ok: true, 
			msg: "SUCCESS",
			got: products
		}, null, 4))
	})
}

function GetProduct(req, res) {
	
	print("[Info] GET '" + req.originalUrl + "'")

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

function CreateProduct(req, res){

	print("[Info] POST '" + req.originalUrl + "'")
	let id = req.params.id
	server.getDoc(id).then((doc) => {
		
		let product = {}

		// Only get revision if doc exists
		if(doc != undefined) {
			
			print(doc)
			product = doc
			product["_rev"] = doc._rev;
			product["dbtype"] = "product"

		} else {
			product["_id"] = id
			print("[Info] No doc with id '" + id + "'")
		}

		// Copy query attributes to product object
		// TODO: use deepcopy - when updating animolz (an array) we cant just do
		// product["animolz"] = query["animolz"], we will lose all previous animolz
		for(let attr in req.body){
			
			print(req.body[attr])
			
			// Try to parse objects parameters to interpret arrays as real 
			// arrays, not strings
			try { product[attr] = JSON.parse(req.body[attr]) }
			// If parsing failed, its not an object, just read it
			catch(err){ product[attr] = req.body[attr] }
		}

		print("[Info] Inserting product: " + JSON.stringify(product, null, 4))
		db.insert(product, id, (err, body) => {
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

function UpdateProduct(req, res) {

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
		
		let product = doc
		product["dbtype"] = "product"
		print(doc)

		product["_rev"] = doc._rev;

		// Copy query attributes to product object
		// TODO: use deepcopy - when updating animolz (an array) we cant just do
		// product["animolz"] = query["animolz"], we will lose all previous animolz
		for(let attr in req.body){
			
			print(req.body[attr])
			
			// Try to parse objects parameters to interpret arrays as real 
			// arrays, not strings
			try { product[attr] = JSON.parse(req.body[attr]) }
			// If parsing failed, its not an object, just read it
			catch(err){ product[attr] = req.body[attr] }
		}

		print("[Info] Inserting product: " + JSON.stringify(product, null, 4))
		db.insert(product, id, (err, body) => {
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

function DeleteProduct(req, res) {

	print("[Info] DELETE '" + req.originalUrl + "'")
	
	let product = req.params.id;
	getRev(product).then((rev) => {

		print("[Info] Found rev = '" + req.originalUrl + "' for product '" + product + "'")
		db.destroy(product, rev, function(err, body) {
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
exports.ListProducts = ListProducts
exports.GetProduct = GetProduct
exports.CreateProduct = CreateProduct
exports.UpdateProduct = UpdateProduct
exports.DeleteProduct = DeleteProduct
