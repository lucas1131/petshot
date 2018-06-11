/* 
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Luca Gomes Urssi 10425396
 * Rafael do Fake News 9293095
 *
 */
import ServiceInfo from './serviceInfo';
import ProductInfo from './productInfo';

import deepcopy from 'deepcopy';

function uniq(a) {
    return a.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    })
}

function insert(key, obj, tmp, storage){
	
	console.log()
	console.log('inserting into ' + key)
	console.log('object: ') 
	console.log(obj)
	console.log('tmp: ') 
	console.log(tmp)

	if(obj && !('id' in obj)){ // If id variable has not been defined
		console.error(`No primary key defined for object ${JSON.stringify(obj)}. Please, define \'object.id\'.`)
		throw { 
			code: 1,
			name: 'UNDEFINED_PRIMARY_KEY',
			desc: `No primary key defined for object ${JSON.stringify(obj)}. Please, define \'object.id\'.`
		}
	}

	// If object already exists, update its value
	let found = false;
	for(var index = 0; index < tmp.length; index++){
		if(tmp[index].id == obj.id) {
			found = true;
			break;
		}
	}
	console.log(found)

	if(found) tmp[index] = deepcopy(obj); // Object exists, update value
	else tmp.push(obj) // Object does not exists, create it

	storage.setItem(key, JSON.stringify(tmp)) 
}

function store(key, obj, storage){

	let isArray = Array.isArray(obj);
	let tmp = JSON.parse(storage.getItem(key));
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
		console.log()
		console.log('key not found, creating it')
		console.log('inserting into ' + key)
		console.log('object: ')
		console.log(obj)

		let finalObj;
		if(isArray) finalObj = deepcopy(obj);
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

	/* Users */
	let usersList = []

	id = 'jureg'

	
	let user1 = {
		id: id,
		username: id,
		password: 'lorotabraba',
		type: 'user',
		name: 'Rafael',
		surname: 'do Fake News',
		address: ['Rua Dr Carlos de Camargo Salles 306 ap 2'],
		animals: [],
		services: [],
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
		name: 'GiovaNNa',
		surname: 'Guimarães',
		address: ['Rua Achile Bassi 2686 ap 25'],
		animals: [],
		services: [],
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
		surname: 'Soar',
		address: ['Rua Jacinto Favorett 301 ap 44'],
		animals: [],
		services: [],
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
		name: 'Ade',
		surname: 'Ministrador',
		address: ['Rua Dos Bobos 0'],
		animals: [],
		services: [],
		image: 'resources/avatar.png',
		background: 'resources/Dog-with-goggles-in-car.jpg',
		email: 'ade.ministrador@admin.petshop.com'
	}

	/* Populate list */
	usersList.push(user1)
	usersList.push(user2)
	usersList.push(user3)
	usersList.push(admin)

	/* Insert them in db */
	if(!getFromLocalStorage('user-info')) 
		storeInLocalStorage('user-info', usersList)
	if(!getFromLocalStorage('products-info')) 
		storeInLocalStorage('products-info', ProductInfo)
	if(!getFromLocalStorage('services-info')) 
		storeInLocalStorage('services-info', ServiceInfo)
}

populateDB()	