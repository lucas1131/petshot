/* Resources */
import shower from '../resources/banho.jpg';
import shear from '../resources/tosa.jpg';
import vet from '../resources/veterinario.png';
import castration from '../resources/castracao.png';

const ServiceInfo = [

	{
		type: 'service',
		id: 0,
		image: shower,
		name: 'Banho',
		price: '40.00'
	},
	
	{
		type: 'service',
		id: 1,
		image: shear,
		name: 'Tosa',
		price: '40.00'
	},

	{
		type: 'service',
		id: 2,
		image: vet,
		name: 'Veterinário',
		price: '40.00'
	},

	{
		type: 'service',
		id: 3,
		image: castration,
		name: 'Castração',
		price: '40.00'
	}

];

export default ServiceInfo;