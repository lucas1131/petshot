/* Resources */
import shower from '../resources/banho.jpg';
import shear from '../resources/tosa.jpg';
import vet from '../resources/veterinario.png';
import castration from '../resources/castracao.png';

const ServiceInfo = [

	{
		id: 0,
		type: 'service',
		desc: 'Vamos deixar seu pet cheirosinho!',
		image: shower,
		name: 'Banho',
		price: '40.00'
	},
	
	{
		id: 1,
		type: 'service',
		desc: 'Útil quando seu doggo tá parecendo uma ovelha',
		image: shear,
		name: 'Tosa',
		price: '40.00'
	},

	{
		id: 2,
		type: 'service',
		desc: 'É só uma virose mesmo',
		image: vet,
		name: 'Veterinário',
		price: '40.00'
	},

	{
		id: 3,
		type: 'service',
		desc: 'Corta a sarchicha fora',
		image: castration,
		name: 'Castração',
		price: '40.00'
	}

];

export default ServiceInfo;