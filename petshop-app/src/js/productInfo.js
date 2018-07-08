/* Resources */
import collar from '../resources/collar.jpg';
import food from '../resources/racao2.jpg';
import ball from '../resources/ball.png';

let axios = require("axios")

const ProductInfo = [
	{
		id: 0,
		type: 'product',
		image: "https://imgur.com/jJWieNql.png",
		desc: 'Nham nham, tem gosto de terra suja!',
		name: 'Raçam',
		price: 20.00
	},

	{
		id: 1,
		type: 'product',
		image: "https://imgur.com/jJWieNql.png",
		desc: 'Ração sabor maçã',
		name: 'Raçã',
		price: 30.00
	},

	{
		id: 2,
		type: 'product',
		desc: 'Bola quadrada',
		image: "https://imgur.com/S0hskK8l.png",
		name: 'Bolinha',
		price: 10.00
	},

	
	{
		id: 3,
		type: 'product',
		desc: 'Uma coleirinha dahora',
		image: "https://imgur.com/977ThZFl.png",
		name: 'Coleira',
		price: 40.00
	},

	{
		id: 4,
		type: 'product',
		desc: 'Outra coleira topper',
		image: "https://imgur.com/977ThZFl.png",
		name: 'Coleira Especial',
		price: 30.00
	},

	{
		id: 5,
		type: 'product',
		desc: 'Bola quadrada',
		image: "https://imgur.com/S0hskK8l.png",
		name: 'Pelota Quadrada',
		price: 100.00
	},
];

// Auto populate db
ProductInfo.forEach((s) => {
	console.log(s)
	axios({
		method: 'post',
		url: 'http://localhost:8080/addProduct/' + s.name,
		data: s,
		contentType: "application/json"
	}).catch((err) => {
		console.log(err)
	})
})


export default ProductInfo;