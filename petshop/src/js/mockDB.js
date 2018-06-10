/* 
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Luca Gomes Urssi 10425396
 * Rafael do Fake News 9293095
 *
 */
import ServiceInfo from './serviceInfo';
import ProductInfo from './productInfo';

function uniq(a) {
    return a.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    })
}

function insert(key, obj, tmp, storage){
	
	if(!("id" in obj)){ // If id variable has not been defined
		console.error(`No primary key defined for object ${JSON.stringify(obj)}. Please, define \"object.id\".`)
		throw { 
			code: 1,
			name: 'UNDEFINED_PRIMARY_KEY',
			desc: `No primary key defined for object ${JSON.stringify(obj)}. Please, define \"object.id\".`
		}
	} 

	// If object already exists, update its value
	let found = false;
	for (var index = 0; index < tmp.length; index++){
		if(tmp[index].id == obj.id) {
			found = true;
			break;
		}
	}

	if(found) tmp[index] = obj; // Object exists, update value
	else tmp.push(obj) // Object does not exists, create it

	storage.setItem(key, JSON.stringify(tmp)) 
}

function store(key, obj, storage){

	let isArray = Array.isArray(obj);
	let tmp = getFromLocalStorage(key);
	key = key.toLowerCase()
	
	// If key exists in database
	if(tmp){
		if(isArray){
			for(let i = 0; i < obj.length; i++){
				insert(key, obj[i], tmp, storage)
			}
		} else insert(key, obj, tmp, storage)
		
	// Key doesnt exists
	} else {
		
		let finalObj;
		if(isArray) finalObj = obj
		else finalObj = [obj]

		storage.setItem(key, JSON.stringify(finalObj)) 
	}
}

export function storeInLocalStorage(key, obj){ 
	store(key, obj, localStorage)
}

export function getFromLocalStorage(key){ 
	key = key.toLowerCase()
	return JSON.parse(localStorage.getItem(key)) 
}

export function storeInSessionStorage(key, obj){ 
	store(key, obj, sessionStorage)
}

export function getFromSessionStorage(key){ 
	key = key.toLowerCase()
	return JSON.parse(sessionStorage.getItem(key)) 
}

export default function populateDB(){

	let cart = []
	let id = 0
	let qtd = 2

	let cartItem1 = {
		id: id,
		product_id: id,
		type: 'cart',
	    product: ProductInfo[id],
		quantity: qtd,
		totalCost: ProductInfo[id].price*qtd
	}

	id = 1
	qtd = 1
	let cartItem2 = {
		id: id,
		product_id: id,
		type: 'cart',
	    product: ProductInfo[id],
		quantity: qtd,
		totalCost: ProductInfo[id].price*qtd
	}

	/* Users */
	let usersList = []

	id = 'jureg'
	let user1 = {
		id: id,
		username: id,
		password: 'lorotabraba',
		type: 'user',
		name: 'Rafael do Fake News',
		image: 'resources/avatar.png',
		background: 'resources/Dog-with-goggles-in-car.jpg',
		email: 'jureg@fake.nilc.usp.br'
	}

	id = 'xofanna'
	let user2 = {
		id: id,
		username: id,
		password: 'col s={12}',
		type: 'user',
		name: 'GiGi',
		image: 'resources/avatar.png',
		background: 'resources/Dog-with-goggles-in-car.jpg',
		email: 'giovanna@trevas.com'
	}

	id = 'airo'
	let user3 = {
		id: id,
		username: id,
		password: 'omedefero',
		type: 'user',
		name: 'Airo',
		image: 'resources/avatar.png',
		background: 'resources/Dog-with-goggles-in-car.jpg',
		email: 'airo@usp.br'
	}

	id = 'admin'
	let admin = {
		id: id,
		username: id,
		password: 'admin',
		type: 'user',
		name: 'Ade Ministrador',
		image: 'resources/avatar.png',
		background: 'resources/Dog-with-goggles-in-car.jpg',
		email: 'ade.ministrador@admin.petshop.com'
	}

	/* Populate list */
	usersList.push(user1)
	usersList.push(user2)
	usersList.push(user3)
	usersList.push(admin)
	
	cart.push(cartItem1)
	cart.push(cartItem2)

	/* Insert them in db */
	storeInSessionStorage("cart", cart)
	storeInSessionStorage("cart", cart)
	storeInLocalStorage('user-info', usersList)
	storeInLocalStorage('products-info', ProductInfo)
	storeInLocalStorage('services-info', ServiceInfo)
}

populateDB()