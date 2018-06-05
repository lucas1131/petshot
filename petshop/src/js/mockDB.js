/* 
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Luca Gomes Urssi 10425396
 * Rafael do Fake News 9293095
 *
 */

 var deepEqual = require('deep-equal')

function uniq(a) {
    return a.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    })
}

function insert(key, obj, tmp, storage){
	
	// If object already exists, update its value
	let found = false;
	for (var index = 0; index < tmp.length; index++){
		if(deepEqual(tmp[index], obj)) {
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

	key = key.toLowerCase()

	let tmp = getFromLocalStorage(key);
	
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

	let productList = []
	let product1 = { name: "Rassaum", cost: 20 }
	let product2 = { name: "Raçã", cost: 40 }

	let cart = []
	let cartItem1 = {
	    product: "Rassaum",
		quantity: 1,
		cost: 20,
		totalCost: 0
	}
	cartItem1.totalCost = cartItem1.cost*cartItem1.quantity;

	let cartItem2 = {
		product: "Raçã sabor maçã",
		quantity: 2,
		cost: 40,
		totalCost: 0
	}
	cartItem2.totalCost = cartItem2.cost*cartItem2.quantity;

	productList.push(product1)
	productList.push(product2)
	cart.push(cartItem1)
	cart.push(cartItem2)
	storeInSessionStorage("Cart", cart)
	storeInSessionStorage("Cart", cart)

	/* Users */
	let usersList = []
	let user1 = {
		username: 'jureg',
		password: 'lorotabraba',
		name: 'Rafael do Fake News',
		image: 'resources/avatar.png',
		background: 'resources/Dog-with-goggles-in-car.jpg',
		email: 'jureg@fake.nilc.usp.br'
	}
	let user2 = {
		username: 'xofanna',
		password: 'col s={12}',
		name: 'GiGi',
		image: 'resources/avatar.png',
		background: 'resources/Dog-with-goggles-in-car.jpg',
		email: 'giovanna@trevas.com'
	}
	let user3 = {
		username: 'airo',
		password: 'omedefero',
		name: 'Airo',
		image: 'resources/avatar.png',
		background: 'resources/Dog-with-goggles-in-car.jpg',
		email: 'airo@usp.br'
	}
	let admin = {
		username: 'admin',
		password: 'admin',
		name: 'Ade Ministrador',
		image: 'resources/avatar.png',
		background: 'resources/Dog-with-goggles-in-car.jpg',
		email: 'Ade.Ministrador@admin.petshop.com'
	}

	usersList.push(user1)
	usersList.push(user2)
	usersList.push(user3)
	usersList.push(admin)
	// usersList.push(1)
	// usersList.push(2)
	// usersList.push(3)
	storeInLocalStorage('user-info', usersList)
}

populateDB()