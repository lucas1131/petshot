export function storeInLocalStorage(key, obj){ 
	
	// If key exists in database
	let tmp;
	if(tmp = getFromLocalStorage(key))
		tmp.push(obj)
	localStorage.setItem(key, JSON.stringify(obj)) 
}

export function getFromLocalStorage(key){ 
	return JSON.parse(localStorage.getItem(key)) 
}

export function storeInSessionStorage(key, obj){ 
	
	// If key exists in database
	let tmp;
	if(tmp = getFromSessionStorage(key))
		tmp.push(obj)
	sessionStorage.setItem(key, JSON.stringify(obj)) 
}

export function getFromSessionStorage(key){ 
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
}

populateDB()