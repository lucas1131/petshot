/* Resources */
import shower from '../resources/banho.jpg';
import shear from '../resources/tosa.jpg';
import vet from '../resources/veterinario.png';
import castration from '../resources/castracao.png';

let axios = require("axios")

const ServiceInfo = [

	{
		id: 7,
		type: 'service',
		desc: 'Vamos deixar seu pet cheirosinho!',
		image: "https://imgur.com/nE1NHgCl.png",
		name: 'Banho',
		price: '40.00'
	},
	
	{
		id: 1,
		type: 'service',
		desc: 'Útil quando seu doggo tá parecendo uma ovelha',
		image: "https://imgur.com/qRNaJghl.png",
		name: 'Tosa',
		price: '40.00'
	},

	{
		id: 2,
		type: 'service',
		desc: 'É só uma virose mesmo',
		image: "https://imgur.com/DFAwJRjl.png",
		name: 'Veterinário',
		price: '40.00'
	},

	{
		id: 3,
		type: 'service',
		desc: 'Corta a sarchicha fora',
		image: "https://imgur.com/P8ovSfUl.png",
		name: 'Castração',
		price: '40.00'
	}

];

ServiceInfo.forEach((s) => {
	axios({
		method: 'post',
		url: 'http://localhost:8080/addService/' + s.name,
		data: s,
		contentType: "application/json"
	}).then((req) => {
		console.log(req)
	}).catch((err) => {
		console.log(err)
	})
})

export default ServiceInfo;